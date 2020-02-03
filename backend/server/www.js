const express = require ('express');
const http = require ('http');
const cookieParser = require ('cookie-parser');
const logger = require ('morgan');
const session = require ('express-session');
const Filestore = require ('session-file-store') (session);
const indexRouter = require ('../routes/index');
const bodyParser = require ('body-parser');
require('dotenv').config()

const mongoose = require ('mongoose');
const app = express ();
mongoose.connect (`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@clusterelbrus-ntmbz.mongodb.net/makeApp?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

http.createServer (app).listen (process.env.PORT || 5010)
app.use (logger ('dev'));
// const port = '5010';
// app.set ('port', "5010");

app.use (session ({
  store: new Filestore (), key: 'user_sid', secret: 'anything', resave: false, saveUninitialized: false, cookie: {
    expires: 600000
  }
}));
app.use (bodyParser.urlencoded ({extended: true}));
app.use (bodyParser.json ());

app.use (cookieParser ());
app.use ('/', indexRouter);

// const server = http.createServer (app);
//
// server.listen ("5010");