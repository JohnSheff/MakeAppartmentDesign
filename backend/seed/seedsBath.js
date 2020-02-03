// const bathBase = require ('./bathBase');
// require('dotenv').config();
// const mongoose = require ('mongoose');
// mongoose.connect (`mongodb+srv://makeapp:123@clusterelbrus-ntmbz.mongodb.net/makeApp?retryWrites=true&w=majority`, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false
// });
// const Bath = require ('../models/todos');
// function bathDB () {
//   try {
//     let bb = bathBase.keramaWall.map ((el) => {
//       const data = new Bath ({
//         img: el.img,
//         title: el.title,
//         sampleImage: el.sampleImage,
//         price: el.price,
//         href: el.href,
//         descript: el.descript,
//       });
//       data.save ();
//       console.log(data)
//     });
//     return   bb;
//   } catch (e) {
//   }
//   mongoose.connection.close ();
// }
// bathDB ();