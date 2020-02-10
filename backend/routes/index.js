// Подозрительно мало кода на беке)
const express = require('express');
const router = express.Router();
const User = require('../models/users');
const bcrypt = require('bcrypt');
const saltRounds = 10;

router.route('/')
  .get(function (req, res) {
    res.send('ok');
  });


router.route('/favicon.ico')
  .get(function (req, res) {
    res.send('ok');
  });

router.route('/signIn')
  .get(function (req, res) {
    res.render('signIn');
  })
  .post(async function (req, res) {
    const { username, email, password } = req.body;
    try {
      const user = new User({
        username,
        email,
        password: await bcrypt.hash(password, saltRounds)
      });
      await user.save();
      req.session.user = user;
      await res.json({ result: true });
    } catch (e) {
      // Чтобы не писать свои result, можно использовать стандартные статусы ответов. (200, 404, 500, ...)
      // res.status(404).send('not found') - по типу такого.
      return await res.json({ result: false, error: e });
    }
  });

router.route('/login')
  .get(async (req, res) => {
    if (req.session.user) {
      return res.json({ result: true, user: req.session.user.username });
    }
    else {
      return res.json({ result: false, user: null });
    }

  })
  .post(async function (req, res) {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (user && (await bcrypt.compare(password, user.password))) {
      req.session.user = user;
      return res.json({ result: true, user: req.session.user.username });
    }
    else {
      return res.json({ result: false });
    }
  });

router.route('/logout')
  .get(async (req, res) => {
    if (req.session.user) {
      let user = req.session.user.username;
      await req.session.destroy();
      await res.clearCookie('user_sid');
      await res.json({ result: true, user: user });
    }
    else {
      await res.json({ result: false });

    }
    await res.end();

  });


module.exports = router;