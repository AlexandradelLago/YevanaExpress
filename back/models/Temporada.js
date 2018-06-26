var mongoose = require("mongoose"),
Schema = mongoose.Schema,
objectId = mongoose.Schema.ObjectId;

var temporadaSchema = new Schema({
    _id: { type: objectId, auto: true },
    precio: { type: array, required: true }, //array de temporada: alta media baja y precio asociado
    date: { type: Date, required: true },
});

var temporada = mongoose.model('temporadas', temporadaSchema);

module.exports = temporada;