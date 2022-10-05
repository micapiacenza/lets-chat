const {Schema, model} = require('mongoose')

const UserModel = {
    username: {
        required: true,
        type: String,
    },
    pwd: {
        required: true,
        type: String,
    },
    email: {
        required: true,
        type: String,
    },
    
}

module.exports = model( 'User1',new Schema(UserModel));