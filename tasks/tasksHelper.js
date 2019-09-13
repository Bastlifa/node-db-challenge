const db = require('../data/db-config')

module.exports =
{
    findTasks,
    findTaskById,
    addTask,
}

function findTasks()
{
    return db('tasks')
        .then(tasks => tasks)
}

function findTaskById(id)
{
    return db('tasks as t')
        .join('projects as p', 'p.id', '=', 't.project_id')
        .select('t.id', 't.description', 'p.name as project_name', 'p.description as project_description', 't.completed')
        .where({'t.id': id})
        .first()
            .then(task =>
                {
                    return task
                })
}

function addTask(task)
{
    return db('tasks')
        .insert(task)
            .then(newTaskId =>
                {
                    return findTaskById(newTaskId[0])
                })
}