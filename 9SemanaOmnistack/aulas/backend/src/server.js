const express = require('express'); //importando dependência
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const routes = require('./routes'); //pasta atual importando

//criando aplicação
const app = express();

mongoose.connect('mongodb://omnistack:omnistack@omnistack-shard-00-00-ajpwy.mongodb.net:27017,omnistack-shard-00-01-ajpwy.mongodb.net:27017,omnistack-shard-00-02-ajpwy.mongodb.net:27017/test?ssl=true&replicaSet=OmniStack-shard-0&authSource=admin&retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
// GET, POST, PUT, DELETE
//GET: buscar informação
//POST: criar nova informação, cadastro
//PUT: editar informação
//DELETE: deletar

//req.query = acessar query params (para filtros)
//req.params = acessar route params (para edição/delete)
//req.body = Acessar corpo da Requisição (para criação e edição)
app.use(cors()); //ali dentro é só colocar http://localhost:3333 para restringir o acesso
app.use(express.json()); //avisando que está utilizando json
app.use('/files', express.static(path.resolve(__dirname,'..', 'uploads'))); //express retornando arquivo estatíco / upload
app.use(routes);



app.listen(3333); //porta que quero rodar a aplicação

