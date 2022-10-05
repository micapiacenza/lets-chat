const user = require('./user/user.model');
// USER
const put_user = () => {}
const get_user = () => {
    return user.findOne();
}
const post_user = () => {}
const delete_user = () => {}

// user.create({username: 'test83'});

module.exports = {
    put_user,
    get_user,
    post_user,
    delete_user,
}
