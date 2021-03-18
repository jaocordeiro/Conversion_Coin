
exports.up = function(knex) {
  return knex.schema.createTable('users', function(table) {
    table.increments('id').unsigned().primary(),
    table.string('name').notNull(),
    table.string('mail').notNull(),
    table.string('password').notNull(),
    table.dateTime('createdAt').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
