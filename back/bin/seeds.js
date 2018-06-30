const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yevana', {useMongoClient: true});
const Season = require ('../models/Season');
// const Van = require('../models/Van');
// const User = require('../models/User')
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


const seasonData =[
  {
    dateSeason: [
      {
        date: "2014-01-01T23:28:56.782Z",
         season:"low"},
      {date: "2014-01-01T23:28:56.782Z",season:"medium"},
      {date: "2014-01-01T23:28:56.782Z", season:"high"}]
   } ];







Season.create(seasonData, (err, docs) => {
    if (err) {
      throw err;
    }
    docs.forEach((dro) => {
      console.log(dro[0])
    });
    mongoose.connection.close();
  });


