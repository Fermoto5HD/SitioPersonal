const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

const authenticationMiddleware = require('./jojo_middleware')

const user = {
    usr: 'Fermoto5HD',
    pwd: 'IIZAAYAA!1',
    id: 1
}

function findUser(usr, callback) {
    if (usr === user.usr) {
        return callback(null, user)
    }
    return callback(null)
}

passport.serializeUser(function (user, cb) {
    cb(null, user.usr)
})

passport.deserializeUser(function (usr, cb) {
    findUser(usr, cb)
})

function initPassport() {
    passport.use(new LocalStrategy(
        usernameField: 'email',
        passwordField: 'passcode',
        function (usr, passcode, done) {
            findUser(usr, function (err, user) {
                if (err) {
                    return done(err)
                }
                if (!user) {
                    return done(null, false)
                }
                if (passcode !== user.pwd) {
                    return done(null, false)
                }
                return done(null, user)
            })
        }
    ))

    passport.authenticationMiddleware = authenticationMiddleware;
}

module.exports = initPassport;