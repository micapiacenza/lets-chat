const room = require('./room/room.model');

const put_room = () => {}
const get_room = () => {
    return room.findOne();
}
const get_users_room = () => {}
const delete_room = () => {}
const delete_user_room = () => {}

module.exports = {
    put_room,
    get_room,
    get_users_room,
    delete_room,
    delete_user_room,
}
