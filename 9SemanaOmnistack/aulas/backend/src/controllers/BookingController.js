const Booking = require('../models/Booking');

module.exports = {
    async store(req, res){
        const { user_id } = req.headers;
        const { spot_id } = req.params;
        const { date } = req.body;

        //passando informações
        const booking = await Booking.create({
            user: user_id,
            spot: spot_id,
            date,
        });
        //usuário e spot são prrenchidos com todas as informações do objetos, vai aparecer tudo
        await booking.populate('spot').populate('user').execPopulate();

        return res.json(booking);
    }

};