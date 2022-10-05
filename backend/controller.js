// const user = require('../frontend/src/app/common/interfaces/user.interface');
// const roles = require('../frontend/src/app/common/interfaces/roles');
// const group = require('../frontend/src/app/common/interfaces/group.interface');
// const room = require('../frontend/src/app/common/interfaces/room.interface');

const main_chat = (req, res) => {

}

const chat_index = (req, res) => {

}

// Create

const create_group = (req, res) => {

}

const create_room = (req, res) => {

}

const create_user = (req, res) => {

}

// Add

const add_user_to_group = (req, res) => {

}

const add_user_to_room = (req, res) => {

}

// Make

const make_user_super_admin = (req, res) => {

}

const make_user_group_admin = (req, res) => {

}

const make_user_group_assistant = (req, res) => {

}

// Delete

const delete_group = (req, res) => {

}

const delete_user = (req, res) => {

}

const delete_room = (req, res) => {

}

const user = require('./user.model');
user.create({username: 'test83'});

module.exports = {
  main_chat,
  chat_index,
  create_group,
  create_room,
  create_user,
  add_user_to_group,
  add_user_to_room,
  make_user_super_admin,
  make_user_group_admin,
  make_user_group_assistant,
  delete_user,
  delete_group,
  delete_room,
}
