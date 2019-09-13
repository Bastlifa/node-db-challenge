const db = require('../data/db-config')

module.exports =
{
    findResources,
    findResourceById,
    addResource,
}

function findResources()
{
    return db('resources')
        .then(projects => projects)
}

function findResourceById(id)
{
    return findResources()
        .then(resources =>
            {
                return resources.filter(resource => resource.id === Number(id))[0]
            })
}

function addResource(resource)
{
    return db('resources')
        .insert(resource)
            .then(newResourceId =>
                {
                    return findResourceById(newResourceId[0])
                })
}