const db = require('../data/db-config')

module.exports =
{
    findProjects,
    // findProjectById,
    // addProject,
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