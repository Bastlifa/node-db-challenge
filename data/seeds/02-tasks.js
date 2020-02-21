exports.seed = function(knex, promise)
{
    return knex('tasks')
    .insert(
        [
            {
                description: 'Import repo',
                notes: 'If import takes too long, cancel, delete repo created, fork and clone',
                project_id: 1,
            },
            {
                description: 'Read the instructions',
                project_id: 1,
            },
            {
                description: 'Design the database in dbdesigner.net',
                notes: 'Design is here: https://dbdesigner.page.link/31Wa',
                project_id: 1,
            },
            {
                description: 'Begin coding',
                project_id: 1,
            },
            {
                description: 'Commit often',
                project_id: 1,
            },
            {
                description: 'Push, wait, have a good weekend',
                project_id: 1,
            },
            {
                description: 'Pick a room',
                project_id: 2,
            },
            {
                description: 'Grab supplies',
                project_id: 2,
            },
            {
                description: 'Clean it up',
                project_id: 2,
            },
            {
                description: 'Repeat',
                project_id: 2,
            },
            {
                description: 'Set aside some time',
                project_id: 3,
            },
            {
                description: 'Read some of the data structures book',
                project_id: 3,
            },
            {
                description: 'Repeat until completed',
                project_id: 3,
            },
        ])
}