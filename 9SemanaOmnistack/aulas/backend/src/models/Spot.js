//entidade
const mongoose = require('mongoose');

const SpotSchema = new mongoose.Schema({ //criando schema
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String], //tecnologias
    //Quem foi o usuário que salvou
    user:{
        type: mongoose.Schema.Types.ObjectId, //id para pegar informações do usuário
        ref: 'User' //referência para que model
    }
}, {
    toJSON: {
        virtuals: true,
    },
});
SpotSchema.virtual('thumbnail_url').get(function(){
    return `http://localhost:3333/files/${this.thumbnail}`  //importação de imagem
})

module.exports = mongoose.model('Spot', SpotSchema); //exportando usuuário