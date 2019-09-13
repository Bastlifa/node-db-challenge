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

function findProjectById(id)
{
    return findProjects()
        .then(projects =>
            {
                return projects.filter(proj => proj.id === Number(id))[0]
            })
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