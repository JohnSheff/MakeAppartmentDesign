const express = require ('express');
const router = express.Router ();
const User = require ('../models/users');
// const Room = require ('../models/roomShema');
const bcrypt = require ('bcrypt');
const saltRounds = 10;
// let Minio = require ('minio');
//
// let s3Client = new Minio.Client ({
//   endPoint: 'play.min.io',
//   port: 9000,
//   useSSL: true,
//   accessKey: process.env.MINIO_KEY,
//   secretKey: process.env.MINIO_SECRET
// });


// router.route ('/room').get (async (req, res) => {
//   if (req.session.user) {
//     const findRoom = await Room.find ({});
//     return res.json ({room:findRoom});
//   }
//   else {
//     return res.end()
//   }
// });


// router.route ('/slider').get (async (req, res) => {
//   let arr = [];
//   arr.push (await s3Client.presignedGetObject ('makeapp', 'img/room/default.png', 24 * 60 * 60));
//   arr.push (await s3Client.presignedGetObject ('makeapp', 'img/room/default(2).png', 24 * 60 * 60));
//   arr.push (await s3Client.presignedGetObject ('makeapp', 'img/room/default(1).png', 24 * 60 * 60));
//   arr.push (await s3Client.presignedGetObject ('makeapp', 'img/room/bimetal.png', 24 * 60 * 60));
//   arr.push (await s3Client.presignedGetObject ('makeapp', 'img/room/legrand.png', 24 * 60 * 60));
// await  res.json (arr);
// });


// router.route ('/add')
//  .get ((req, res) => {
//    res.send ('add');
//  })
//  .post (async (req, res) => {
//    const host = req.session.user._id;
//    const {name, status} = req.body;
//    try {
//      const todo = new Todo ({
//        name, status
//      });
//      let newTodo = await todo.save ();
//      const finderTodoName = await Todo.findOne ({name: name});
//      await User.findOneAndUpdate ({_id: host}, {$push: {list: finderTodoName._id}});
//      return res.json ({result: true, todo: newTodo});
//    } catch (e) {
//      return res.json ({result: false, error: e});
//    }
//  });

// router.route ('/edit')
//  .get ((req, res) => {
//    res.send ('edit');
//  })
//  .put (async (req, res) => {
//    const {name, newName} = req.body;
//    if (req.session.user) {
//      await Todo.findOneAndUpdate ({name}, {name: newName});
//      const host = req.session.user._id;
//      const findUSer = await User.find ({_id: host}).populate ('list');
//      return res.json ({result: findUSer[0].list, status: true});
//
//    }
//    else {
//      return res.json ({result: false, error: e});
//    }
//  });
// router.route ('/delete').get ((req, res) => {
//   res.send ('delete');
// })
//  .delete (async (req, res) => {
//    if (req.session.user) {
//      const {name} = req.body;
//      const userId = req.session.user._id;
//      let todo = await Todo.findOne ({name});
//      await User.updateOne ({_id: userId}, {$pull: {list: todo._id}});
//      let deleteTodo = await todo.deleteOne ({name});
//      return res.json (deleteTodo);
//    }
//  });

router.route ('/')
 .get (function (req, res) {
   res.send ('ok');
 });


router.route ('/favicon.ico')
 .get (function (req, res) {
   res.send ('ok');
 });

router.route ('/signIn')
 .get (function (req, res) {
   res.render ('signIn');
 })
 .post (async function (req, res) {
   const {username, email, password} = req.body;
   try {
     const user = new User ({
       username, email, password: await bcrypt.hash (password, saltRounds)
     });
     await user.save ();
     req.session.user = user;
     await res.json ({result: true});
   } catch (e) {
     return await res.json ({result: false, error: e});
   }
 });

router.route ('/login')
 .get (async (req, res) => {
   if (req.session.user) {
     // const host = req.session.user._id;
     // const findRoom = await Room.findOne ({});
     
     // const findUSer = await User.find ({_id: host}).populate ('list');
     return res.json ({result: true, user: req.session.user.username});
   }
   else {
     return res.json ({result: false, user: null});
   }
   
 })
 .post (async function (req, res) {
   const {username, password} = req.body;
   const user = await User.findOne ({username});
   if (user && (await bcrypt.compare (password, user.password))) {
     req.session.user = user;
     return res.json ({result: true, user: req.session.user.username});
   }
   else {
     return res.json ({result: false});
   }
 });

router.route ('/logout')
 .get (async (req, res) => {
   if (req.session.user) {
     console.log ("test");
     let user = req.session.user.username;
     await req.session.destroy ();
     await res.clearCookie ('user_sid');
     await res.json ({result: true, user: user});
   }
   else {
     await res.json ({result: false});
     
   }
   await res.end ();
   
 });


module.exports = router;