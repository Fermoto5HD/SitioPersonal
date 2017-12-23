var mongoose =      require('mongoose');
let assert =        require('assert');
var gracefulShutdown;
let dbURI;
if (process.env.NODE_ENV === 'production') {
  //const mongoHost = process.env.MONGODB_1_PORT_27017_TCP_ADDR || '127.0.0.1'
  //const mongoPort = process.env.MONGODB_1_PORT_27017_TCP_PORT || 27017
  const mongoUser = process.env.MONGO_USR || 'root'
  const mongoPass = process.env.MONGO_PWD || ''
  const mongoHost = process.env.MONGO_HOST || '127.0.0.1'
  const mongobase = process.env.MONGO_BASE
  dbURI  = `mongodb://${mongoUser}:${mongoPass}@${mongoHost}:27017/${mongobase}`
} else {
  dbURI = 'mongodb://localhost/FM5HD';
}

var promise = mongoose.connect(dbURI, {
  useMongoClient: true,
  /* other options */
});
// Or `createConnection`
var promise = mongoose.createConnection(dbURI, {
  useMongoClient: true,
  /* other options */
});

// BRING IN YOUR SCHEMAS & MODELS
promise.then(function(db) {
  /* Use `db`, for instance `db.model()`*/
  console.log("yes");
});

// CONNECTION EVENTS
mongoose.connection.on('connected', function() {
  console.log('Mongoose connected to ' + dbURI);
});
mongoose.connection.on('error', function(err) {
  console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function() {
  console.log('Mongoose disconnected');
});

// CAPTURE APP TERMINATION / RESTART EVENTS
// To be called when process is restarted or terminated
gracefulShutdown = function(msg, callback) {
  mongoose.connection.close(function() {
    console.log('Mongoose disconnected through ' + msg);
    callback();
  });
};
// For nodemon restarts
process.once('SIGUSR2', function() {
  gracefulShutdown('nodemon restart', function() {
    process.kill(process.pid, 'SIGUSR2');
  });
});
// For app termination
process.on('SIGINT', function() {
  gracefulShutdown('app termination', function() {
    process.exit(0);
  });
});
// For Heroku app termination
process.on('SIGTERM', function() {
  gracefulShutdown('Heroku app termination', function() {
    process.exit(0);
  });
});


require('./ads');
require('./jojos');
require('./portfolio');
require('./blog');