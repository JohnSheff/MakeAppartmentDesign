// // const bathBase = require ('./bathBase');
// const Room = require ('../models/roomShema');
// const {dataBase} = require ('./roomBase');
// const mongoose = require ('mongoose');
//
// mongoose.connect (`mongodb+srv://makeapp:123@clusterelbrus-ntmbz.mongodb.net/makeApp?retryWrites=true&w=majority`, {
//   useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false
// });
//
// function bathDB () {
//   try {
//
//     const data = new Room ({
//       srcPlint:dataBase.srcPlint,
//       sill:dataBase.sill,
//       light:dataBase.light,
//       molding:dataBase.margin,
//       elecric:dataBase.elecric,
//       colorWall:dataBase.colorWall,
//       srcSample:dataBase.srcSample,
//       srcDoor:dataBase.srcDoor,
//       preset:dataBase.preset,
//     });
//     data.save ();
//
//   } catch (e) {
//   }
//
//   // mongoose.connection.close ();
// }
//
// bathDB ();
