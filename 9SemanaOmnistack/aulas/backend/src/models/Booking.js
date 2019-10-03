//entidade
const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({ //criando schema
    date: String,
    approved: Boolean,
    //Quem foi o usuário que salvou
    user: {
        type: mongoose.Schema.Types.ObjectId, //id para pegar informações do usuário
        ref: 'User' //referência para que model
    },
    spot: {
        type: mongoose.Schema.Types.ObjectId, //id para pegar informações do usuário
        ref: 'Spot' //referência para que model
    }
});

module.exports = mongoose.model('Booking', BookingSchema); //exportando usuuário