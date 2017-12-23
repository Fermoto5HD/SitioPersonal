const express =       require('express'),
      session =       require('express-session'),
      minify =        require('express-minify'),
      useragent =     require('express-useragent'),
      MongoStore =    require('connect-mongo')(session),
      mongoose =      require('mongoose'),
      passport =      require('passport'),
      flash =         require('connect-flash'),
      cookieParser =  require('cookie-parser'),
      bodyParser =    require('body-parser'),
      Promise =       require("bluebird"),
      assert =        require('assert'),
      port =          process.env.PORT || '3000';

const path = require('path');
const http = require('http');
const compression = require('compression');

let app = express();

/*const mongoose = require('mongoose')*/
//const LocalStrategy = require('passport-local').Strategy
require('./server/models/db')
//const configDB = require('./server/config/database.js');

require('./server/config/passport')(passport)

/*passport.use(new LocalStrategy(
  function (username, password, done) {
    Jojos.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));*/

// Get our API routes
let config = require('./server/config');

  /*secret: 'JosephxCaesarBestOTPEver!!1!',*/
app.use(cookieParser());
/*app.use(session({
  secret: 'ShizuoLovesIzaya!!1!',
  saveUninitialized: true,
  resave: true,
  cookie: {
    secure: true,
    maxAge: 300000
  }
}))*/
if (process.env.NODE_ENV === 'production') {
  //const mongoHost = process.env.MONGODB_1_PORT_27017_TCP_ADDR || '127.0.0.1'
  //const mongoPort = process.env.MONGODB_1_PORT_27017_TCP_PORT || 27017
  /*const mongoUser = process.env.MONGO_USR || 'root'
  const mongoPass = process.env.MONGO_PWD || ''
  const mongoHost = process.env.MONGO_HOST || '127.0.0.1'
  const mongobase = process.env.MONGO_BASE
  dbURI  = `mongodb://${mongoUser}:${mongoPass}@${mongoHost}:27017/${mongobase}`*/
  dbURI = 'mongodb://localhost/FM5HD';
} else {
  dbURI = 'mongodb://localhost/FM5HD';
}
/*app.use(
  session({
    store: new SessionStore({
    url: dbURI,
    interval: 1200000
  }),
  cookie: { maxAge: 1200000 },
  secret: 'ShizuoLovesIzaya!!1!'
}))*/
app.use(session({
    secret: 'ShizuoLovesIzaya!!1!',
    saveUninitialized: false, // don't create session until something stored
    resave: false, //don't save session if unmodifiedresave: 
    store: new MongoStore(
      {
        url: dbURI,
        collection: 'walkers',
      }
    )
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())

// Point static path to dist
app.use(compression())
app.use(minify())
app.use(useragent.express())

// Set our api routes
const api = require('./server/routes/api')(app, passport);
app.use('/api', api);

// Catch all other routes and return the index file
app.use(express.static('_dist', {index: false}))
app.use("/static", express.static(__dirname + "/static"));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/_dist/index.html'));
  //if (req.useragent.isIE) {
  //  //app.use(express.static(path.join(__dirname, 'dist-ie')))
  //  res.sendFile(path.join(__dirname, '/_dist-ie/index.html'));
  //} else {
  //  res.sendFile(path.join(__dirname, '/_dist/index.html'));
  //}
});

// launch ======================================================================
app.listen(port);
console.log('The magic happens on port ' + port);