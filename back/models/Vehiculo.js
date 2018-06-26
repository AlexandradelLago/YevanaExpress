var mongoose = require("mongoose"),
Schema = mongoose.Schema,
objectId = mongoose.Schema.ObjectId;

var vehiculoSchema = new Schema({
    _id: { type: objectId, auto: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    features:{
    motor:{type:String,required:true },
    pax:{type:Number,required:true },
    beds:{type:Number,required:true },
    fuel:{type:String,required:true }
    }
});

var vehiculo = mongoose.model('vehiculos', vehiculoSchema);

module.exports = vehiculo;