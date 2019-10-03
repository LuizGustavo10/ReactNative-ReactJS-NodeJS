const multer = require('multer');
const path = require('path');


//multer, relacionado a multiparte, envio de imagens e etc
module.exports = {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..','..','uploads'), //informando onde estão imagens
        filename: (req, file, cb) => {
            const ext = path.extname(file.originalname); //salvando nome original
            const name = path.basename(file.originalname, ext);

            //passando nomeCompleto da imagem e buscando extensão com path.extname
            cb(null, `${name}-${Date.now()}${ext}`); //garantir que envie cada imagem, sem sobreposição

        },

    }),

};