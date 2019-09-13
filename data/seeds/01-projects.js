exports.seed = function(knex, promise)
{
    return knex('projects')
    .insert(
        [
            {
                name: 'The Sprint Challenge',
                description: 'Get it done in 3 hours.',
            },
            {
                name: 'Clean the House',
            },
            {
                name: 'Learn Data Structures',
                description: 'Prepare for cs modules by learning some data structures.',
            }
        ])
}