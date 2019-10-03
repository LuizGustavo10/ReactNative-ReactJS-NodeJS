const User = require('../models/User');
const Spot = require('../models/Spot');

module.exports = {
    //retornando a LISTA DE SPOTS--------------------------------
    async index(req, res){
        const { tech } = req.query;
        const spots = await Spot.find({ techs: tech });

        return res.json(spots);
    },

    async store(req, res){

        const { filename } = req.file;
        const { company, techs, price } = req.body; //inportando itens da entidade
        const { user_id } = req.headers; //para contexto, autenticação

        //verificar usuário
        const user = await User.findById(user_id);
        //caso o usuário não exista
        if (!user) {
            return res.status(400).json({ erro: "User do not Exist" }) //problema na requisição do usuário
        }

        const spot = await Spot.create({
            user: user_id,
            thumbnail: filename,
            company,
            techs: techs.split(',').map(tech => tech.trim() ),//transformando em array
            price

        })

        return res.json(spot)
    } 
};