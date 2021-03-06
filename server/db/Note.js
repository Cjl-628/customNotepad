const Sequelize = require('sequelize');
const db = require('./db');

const Note = db.define('notes', {
  content: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Note;
