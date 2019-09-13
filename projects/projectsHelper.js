const db = require('../data/db-config')

module.exports =
{
    findProjects,
    findProjectById,
    addProject,
    // findResources,
    // findResourceById,
    // addResource,
    // findTasksByProject,
    // addTask,
}

function findProjects()
{
    return db('projects')
        .then(projects => projects)
}

// function findProjectById(id)
// {
//     return findProjects()
//         .then(projects =>
//             {
//                 return projects.filter(proj => proj.id === Number(id))[0]
//             })
// }

function findProjectById(id)
{
    return db('projects as p')
        .select('*')
        .where({id})
        .first()
            .then(proj => 
                {
                    return findProjectsTasks(id)
                        .then(tasks =>
                            {
                                let retProj = {...proj, tasks: tasks}
                                return retProj
                            })
                    
                })
}

function findProjectsTasks(id)
{
    return db('tasks as t')
        .select('t.id', 't.description', 't.notes', 't.completed')
        .where({'t.project_id': id})
            .then (tasks => tasks)
}

function addProject(project)
{
    return db('projects')
        .insert(project)
            .then(newProjectId =>
                {
                    return findProjectById(newProjectId[0])
                })
}