const GroupModel = require('./group.model');

const put_group = async (name) => {
    return await GroupModel.create({name});
};

const group_list = () => {
    return GroupModel.find();
};

const get_group = (id) => {
    return GroupModel.findById(id);
};

const delete_group = (id) => {
    return GroupModel.findByIdAndRemove(id);
};

const get_rooms_in_group = () => {}


module.exports = {
    put_group,
    get_group,
    list_groups: group_list,
    get_rooms_in_group,
    delete_group,
}
