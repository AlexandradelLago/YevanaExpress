const Booking = require("../models/Booking");
const Van = require("../models/Van");
const User = require('../models/User');
const Season = require("../models/Season");
const moment = require('moment');

// solo para ADMIN
exports.getBookings = function(req, res, next) {
    Booking.find()
    .populate("_van")
    .populate("_user")
    .then(items=>res.status(200).json(items))
    .catch(e=>res.status(500).send(e));
  }

  // USER con el ID y ADMIN
exports.postBooking = (req, res, next)=>{
    // days-- change to dates!!
    console.log(req.body)
    console.log("ESTOY AQUI")
     // The number of milliseconds in one day
     var ONE_DAY = 1000 * 60 * 60 * 24

     // Convert both dates to milliseconds
     //var date1_ms = req.body.endDate.getTime()
     // este lo uso cuando harcodee el valor de date en postman
     var date1_ms = Date.parse(req.body.endDate);
    // var date2_ms = req.body.startDate.getTime()
     var date2_ms = Date.parse(req.body.startDate);
     // Calculate the difference in milliseconds and convert back to days 
     var totalDays = Math.round(Math.abs(date1_ms - date2_ms)/ONE_DAY)

     console.log(totalDays)

     //console.log (Season.find({date = req.body.startDate}));

    Van.findById(req.body._van)
    .then(car => {
        User.findById(req.body.user)
        .then (user => {
        console.log("entre en VAN")
        console.log(req.body._user)
        const newBooking = new Booking({
            startDate: req.body.startDate,
            endDate: req.body.endDate,
            total: totalDays,
            price : totalDays ,
            _van : req.body._van,
            // cuando tenga login pondre req.user en lugar de req.body._user
            _user : req.body._user
        });
// cambiar por req.user
        // total            : { type: Number, required:true},
        
        newBooking.save()
        .then(newBookingCreated=>{
            console.log("entre en booking")
            console.log(newBooking)
           /* User.findByIdAndUpdate(req.user._id,
                {$push: {_Bookings: newBookingCreated._id } }, {'new': true})
            .then(userUpdated => res.status(201).json(userUpdated))*/
        })
        .catch(e=>res.status(500).send(e));
    })})
}

// user con el ID y ADMIN
exports.patchBooking = (req,res,next)=>{
Booking.findByIdAndUpdate(req.params.id, req.body, {new:true})
.then(item=>res.status(200).json(item))
.catch(e=>res.status(500).send(e));
}

// user con el ID y ADMIN
exports.deleteBooking = (req,res,next)=>{
Booking.findByIdAndRemove(req.params.id)
.then(lists=>res.status(200).json(lists))
.catch(e=>res.status(500).send(e));
}