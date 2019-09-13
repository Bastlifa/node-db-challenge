
exports.up = function(knex) {
    return knex.schema
        .createTable('projects', tbl =>
        {
            tbl.increments()
            tbl.string('name').notNullable()
        })
        .createTable('tasks', tbl =>
        {
            tbl.increments()
            tbl.string('description').notNullable()
            tbl.string('notes')
        })
        .createTable('resources', tbl =>
        {
            tbl.increments()
            tbl.string('name').notNullable()
            tbl.string('description')
        })
        .createTable('projects_resources', tbl =>
        {
            tbl
                .integer('project_id')
                .unsigned()
                .references('id')
                .inTable('projects')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
            tbl
                .integer('resource_id')
                .unsigned()
                .references('id')
                .inTable('resources')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
            tbl.primary(['project_id', 'resource_id'])
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('projects_resources')
        .dropTableIfExists('tasks')
        .dropTableIfExists('resources')
        .dropTableIfExists('projects')
};
