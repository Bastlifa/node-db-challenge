exports.seed = function(knex, promise)
{
    return knex('projects')
    .insert(
        [
            {
                name: 'The Sprint Challenge',
                description: 'Get it done in 3 hours.',
                completed: 0
            },
            {
                name: 'Clean the House',
                completed: 0
            },
            {
                name: 'Learn Data Structures',
                description: 'Prepare for cs modules by learning some data structures.',
                completed: 0
            }
        ])
}