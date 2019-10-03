//entidaded
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({ //criando schema
    email: String,
})

module.exports = mongoose.model('User', UserSchema); //exportando usuuário