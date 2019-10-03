const User = require('../models/User');
//Tudo referente a sessão
//index, show, store, update, destroy

module.exports = {
    async store(req, res){ //assincrono, quer dizer que pode levar um tempo para executar
        const { email } = req.body; //email para o corpo da requisição

        let user = await User.findOne({ email }); //se encontrar um usuário com o mesmo email, aramazena na variável
        if (!user) {
            //se não tiver cadastrado
              user = await User.create({ email }) //passando a informação com que o usuário é criado, no caso, email
        }
      

        return res.json(user);
    }
};