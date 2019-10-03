const Spot = require('../models/Spot');

//encontrar spots
module.exports = {
    async show(req, res) {
        const { user_id } = req.headers;
        //procurando usuário
        const spots = await Spot.find({ user: user_id });

        return res.json(spots);
    }
}