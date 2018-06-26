const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yevana', {useMongoClient: true});
const Vehiculo = require('../models/Vehiculo');

// Iteration #1
const vehiculoData =   [{
  name: 'Vios',
  description:  'Coqueta y acogedora cámper ideal para escapadas de finde semana para parejas. 4 Plazas de viaje. Cama para 2 de 110x190. Techo solar practicable para tener un hotel de infinitas estrellas.',
  features:{
  motor:'Diesel',
  pax: 5,
  beds:2,
  fuel:'30L'
  }
},
{
name: 'Vios',
description:  'Coqueta y acogedora cámper ideal para escapadas de finde semana para parejas. 4 Plazas de viaje. Cama para 2 de 110x190. Techo solar practicable para tener un hotel de infinitas estrellas.',
features:{
motor:'Diesel',
pax: 5,
beds:2,
fuel:'30L'
}
}];

Vehiculo.create(vehiculoData, (err, docs) => {
    if (err) {
      throw err;
    }
  
    docs.forEach((dro) => {
      console.log(dro.name)
    });
    mongoose.connection.close();
  });



