const group = require('./group/group.model');

const put_group = () => {}
const get_group = () => {
    return group.findOne();
}
const get_rooms_in_group = () => {}
const delete_group = () => {}

module.exports = {
    put_group,
    get_group,
    get_rooms_in_group,
    delete_group,
}
