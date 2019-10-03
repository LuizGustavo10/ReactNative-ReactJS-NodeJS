const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');

const routes = express.Router();
const upload = multer(uploadConfig);

//controle para procuarar um sessão
routes.post('/sessions', SessionController.store);// endereço depois de localhost:3333

routes.get('/spots', SpotController.index);//nome do campo da imagem, onde passamos
routes.post('/spots', upload.single('thumbnail'),SpotController.store);

//mostrando sposts de um determinado usuário
routes.get('/dashboard', DashboardController.show);
//rota encadeada
routes.post('/spots/:spot_id/bookings',BookingController.store);//o usuário quer criar uma reserva, dentro desse spot aqui
module.exports = routes;