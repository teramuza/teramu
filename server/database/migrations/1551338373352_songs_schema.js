'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SongsSchema extends Schema {
  up () {
    this.create('songs', (table) => {
      table.increments()
      table.string('title', 100).notNullable()
      table.string('artist').notNullable()
      table.string('source').notNullable()
      table.string('artCover')
      table.integer('year',4)
      table.timestamps()
    })
  }

  down () {
    this.drop('songs')
  }
}

module.exports = SongsSchema
