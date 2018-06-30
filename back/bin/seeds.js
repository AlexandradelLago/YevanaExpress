const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yevana', {useMongoClient: true});
//const Season = require ('../models/Season');
// const Van = require('../models/Van');
// const User = require('../models/User')
//const User = require('../models/User')



const booking = [{
  startDate        : "2018-07-06",
  endDate          :"2018-07-13",
  _user            :"5b33c6d62860e7cf02eec1f3",
  _van             :"5b34cb391febc9dce4e725d6"
}];

Booking.create(booking, (err, docs) => {
      if (err) {
        throw err;
      }
      docs.forEach((b) => {
        console.log(b.startDate)
      });
      mongoose.connection.close();
    });



// // Iteration #1
// const vehiculoData =   [
//   {
//     price: [70,90,110],
//     brand: "Mercedes",
//     description       :{
//         short: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus metus dolor, scelerisque sit amet turpis vel, mollis interdum magna. Donec consequat lobortis ornare. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam nec sem eu purus tempor posuere in sit amet lacus. Fusce sed sollicitudin mauris.",
//         long: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sollicitudin lectus sit amet enim porttitor faucibus. Integer mollis fermentum lectus sit amet accumsan. Quisque et fermentum diam. Suspendisse vulputate sodales mauris quis fermentum. Sed placerat neque felis, nec varius sem luctus nec. Morbi faucibus urna at mi fermentum, et porta magna ultricies. Nulla eu erat dignissim, posuere nisl non, faucibus arcu. Ut mattis velit non erat posuere fermentum. Nam efficitur volutpat enim, a mollis tellus suscipit et. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed malesuada et felis non elementum. Mauris vel tempor lectus. Sed id magna."
//     },
//     image:"public/images/banner.jpg",
//     features:{
//     motor:"1200cc",
//     pax:3,
//     beds:1,
//     fuel:"Diesel"
//     }},
//     {
//       price: [70,90,110],
//       brand: "Mercedes",
//       description       :{
//           short: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus metus dolor, scelerisque sit amet turpis vel, mollis interdum magna. Donec consequat lobortis ornare. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam nec sem eu purus tempor posuere in sit amet lacus. Fusce sed sollicitudin mauris.",
//           long: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sollicitudin lectus sit amet enim porttitor faucibus. Integer mollis fermentum lectus sit amet accumsan. Quisque et fermentum diam. Suspendisse vulputate sodales mauris quis fermentum. Sed placerat neque felis, nec varius sem luctus nec. Morbi faucibus urna at mi fermentum, et porta magna ultricies. Nulla eu erat dignissim, posuere nisl non, faucibus arcu. Ut mattis velit non erat posuere fermentum. Nam efficitur volutpat enim, a mollis tellus suscipit et. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed malesuada et felis non elementum. Mauris vel tempor lectus. Sed id magna."
//       },
//       image:"public/images/banner.jpg",
//       features:{
//       motor:"1200cc",
//       pax:3,
//       beds:1,
//       fuel:"Diesel"
//       }}];
// Van.create(vehiculoData, (err, docs) => {
//     if (err) {
//       throw err;
//     }
//     docs.forEach((dro) => {
//       console.log(dro.brand)
//     });
//     mongoose.connection.close();
//   });


// const seasonData =[
//   {
//     // medium season mayo -junio -septiembre
//     // medium season julio-agosto
//     dateSeason: [ // julio
//       {date: "2018-07-01T23:28:56.782Z",season:"high"},
//       {date: "2018-07-02T23:28:56.782Z",season:"high"},
//       {date: "2018-07-03T23:28:56.782Z",season:"high"},
//       {date: "2018-07-04T23:28:56.782Z",season:"high"},
//       {date: "2018-07-05T23:28:56.782Z",season:"high"},
//       {date: "2018-07-06T23:28:56.782Z",season:"high"},
//       {date: "2018-07-07T23:28:56.782Z",season:"high"},
//       {date: "2018-07-08T23:28:56.782Z",season:"high"},
//       {date: "2018-07-09T23:28:56.782Z",season:"high"},
//       {date: "2018-07-10T23:28:56.782Z",season:"high"},
//       {date: "2018-07-11T23:28:56.782Z",season:"high"},
//       {date: "2018-07-12T23:28:56.782Z",season:"high"},
//       {date: "2018-07-13T23:28:56.782Z",season:"high"},
//       {date: "2018-07-14T23:28:56.782Z",season:"high"},
//       {date: "2018-07-15T23:28:56.782Z",season:"high"},
//       {date: "2018-07-16T23:28:56.782Z",season:"high"},
//       {date: "2018-07-17T23:28:56.782Z",season:"high"},
//       {date: "2018-07-18T23:28:56.782Z",season:"high"},
//       {date: "2018-07-19T23:28:56.782Z",season:"high"},
//       {date: "2018-07-20T23:28:56.782Z",season:"high"},
//       {date: "2018-07-21T23:28:56.782Z",season:"high"},
//       {date: "2018-07-22T23:28:56.782Z",season:"high"},
//       {date: "2018-07-23T23:28:56.782Z",season:"high"},
//       {date: "2018-07-24T23:28:56.782Z",season:"high"},
//       {date: "2018-07-25T23:28:56.782Z",season:"high"},
//       {date: "2018-07-26T23:28:56.782Z",season:"high"},
//       {date: "2018-07-27T23:28:56.782Z",season:"high"},
//       {date: "2018-07-28T23:28:56.782Z",season:"high"},
//       {date: "2018-07-29T23:28:56.782Z",season:"high"},
//       {date: "2018-07-30T23:28:56.782Z",season:"high"},
//       {date: "2018-07-31T23:28:56.782Z",season:"high"},
//       // agosto
//       {date: "2018-08-01T23:28:56.782Z",season:"high"},
//       {date: "2018-08-02T23:28:56.782Z",season:"high"},
//       {date: "2018-08-03T23:28:56.782Z",season:"high"},
//       {date: "2018-08-04T23:28:56.782Z",season:"high"},
//       {date: "2018-08-05T23:28:56.782Z",season:"high"},
//       {date: "2018-08-06T23:28:56.782Z",season:"high"},
//       {date: "2018-08-07T23:28:56.782Z",season:"high"},
//       {date: "2018-08-08T23:28:56.782Z",season:"high"},
//       {date: "2018-08-09T23:28:56.782Z",season:"high"},
//       {date: "2018-08-10T23:28:56.782Z",season:"high"},
//       {date: "2018-08-11T23:28:56.782Z",season:"high"},
//       {date: "2018-08-12T23:28:56.782Z",season:"high"},
//       {date: "2018-08-13T23:28:56.782Z",season:"high"},
//       {date: "2018-08-14T23:28:56.782Z",season:"high"},
//       {date: "2018-08-15T23:28:56.782Z",season:"high"},
//       {date: "2018-08-16T23:28:56.782Z",season:"high"},
//       {date: "2018-08-17T23:28:56.782Z",season:"high"},
//       {date: "2018-08-18T23:28:56.782Z",season:"high"},
//       {date: "2018-08-19T23:28:56.782Z",season:"high"},
//       {date: "2018-08-20T23:28:56.782Z",season:"high"},
//       {date: "2018-08-21T23:28:56.782Z",season:"high"},
//       {date: "2018-08-22T23:28:56.782Z",season:"high"},
//       {date: "2018-08-23T23:28:56.782Z",season:"high"},
//       {date: "2018-08-24T23:28:56.782Z",season:"high"},
//       {date: "2018-08-25T23:28:56.782Z",season:"high"},
//       {date: "2018-08-26T23:28:56.782Z",season:"high"},
//       {date: "2018-08-27T23:28:56.782Z",season:"high"},
//       {date: "2018-08-28T23:28:56.782Z",season:"high"},
//       {date: "2018-08-29T23:28:56.782Z",season:"high"},
//       {date: "2018-08-30T23:28:56.782Z",season:"high"},
//       // septiembre
//       {date: "2018-09-31T23:28:56.782Z",season:"medium"},
//       {date: "2018-09-01T23:28:56.782Z",season:"medium"},
//       {date: "2018-09-02T23:28:56.782Z",season:"medium"},
//       {date: "2018-09-03T23:28:56.782Z",season:"medium"},
//       {date: "2018-09-04T23:28:56.782Z",season:"medium"},
//       {date: "2018-09-05T23:28:56.782Z",season:"medium"},
//       {date: "2018-09-06T23:28:56.782Z",season:"medium"},
//       {date: "2018-09-07T23:28:56.782Z",season:"medium"},
//       {date: "2018-09-08T23:28:56.782Z",season:"medium"},
//       {date: "2018-09-09T23:28:56.782Z",season:"medium"},
//       {date: "2018-09-10T23:28:56.782Z",season:"medium"},
//       {date: "2018-09-11T23:28:56.782Z",season:"medium"},
//       {date: "2018-09-12T23:28:56.782Z",season:"medium"},
//       {date: "2018-09-13T23:28:56.782Z",season:"medium"},
//       {date: "2018-09-14T23:28:56.782Z",season:"medium"},
//       {date: "2018-09-15T23:28:56.782Z",season:"medium"},
//       {date: "2018-09-16T23:28:56.782Z",season:"medium"},
//       {date: "2018-09-17T23:28:56.782Z",season:"medium"},
//       {date: "2018-09-18T23:28:56.782Z",season:"medium"},
//       {date: "2018-09-19T23:28:56.782Z",season:"medium"},
//       {date: "2018-09-20T23:28:56.782Z",season:"medium"},
//       {date: "2018-09-21T23:28:56.782Z",season:"medium"},
//       {date: "2018-09-22T23:28:56.782Z",season:"medium"},
//       {date: "2018-09-23T23:28:56.782Z",season:"medium"},
//       {date: "2018-09-24T23:28:56.782Z",season:"medium"},
//       {date: "2018-09-25T23:28:56.782Z",season:"medium"},
//       {date: "2018-09-26T23:28:56.782Z",season:"medium"},
//       {date: "2018-09-27T23:28:56.782Z",season:"medium"},
//       {date: "2018-09-28T23:28:56.782Z",season:"medium"},
//       {date: "2018-09-29T23:28:56.782Z",season:"medium"},
//       {date: "2018-09-30T23:28:56.782Z",season:"medium"},
     
      
//     ]
//    } ];







// Season.create(seasonData, (err, docs) => {
//     if (err) {
//       throw err;
//     }
//     docs.forEach((dro) => {
//       console.log(dro.dateSeason[0])
//     });
//     mongoose.connection.close();
//   });


