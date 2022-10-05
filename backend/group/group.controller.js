const user = require('./user/group.model');
// USER
const put_group = () => {}
const get_group = () => {
    return user.findOne();
}
const post_group = () => {}
const delete_group = () => {}

// user.create({username: 'test83'});

module.exports = {
    put_group,
    get_group,
    post_group,
    delete_group,
}
