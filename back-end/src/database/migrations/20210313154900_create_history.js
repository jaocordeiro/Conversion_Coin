
exports.up = function(knex) {
  return knex.schema.createTable('history', function(table) {
    table.increments('id').unsigned().primary(),
    table.string('source_coin').notNull(),
    table.string('dest_coin').notNull(),
    table.string('value_to_convert').notNull(),
    table.string('value_convert').notNull(),
    table.dateTime('createdAt').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('history');
};
