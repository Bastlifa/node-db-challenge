exports.seed = function(knex, promise)
{
    return knex('tasks')
    .insert(
        [
            {
                name: 'VS Code',
                description: 'dev environment to make project',
            },
            {
                name: 'Old code',
                description: 'reference for how to do things',
            },
            {
                name: 'Cleaning supplies',
            },
            {
                name: 'JS Algorithms and Data Structures Book',
            },
            {
                name: 'Coffee',
                description: 'Helps you wake up to do the task'
            },
        ])
}