const user = require('./user/room.model');
// USER
const put_room = () => {}
const get_room = () => {
    return user.findOne();
}
const post_room = () => {}
const delete_room = () => {}

module.exports = {
    put_room,
    get_room,
    post_room,
    delete_room,
}
