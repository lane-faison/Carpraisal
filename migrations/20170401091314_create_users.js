
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function (table) {
    table.string('email').primary()
    table.string('name')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
}
