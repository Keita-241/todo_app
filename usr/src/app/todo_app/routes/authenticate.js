const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const Users = require('../models/Users');
const session = require('express-session');

module.exports = function (app) {
    app.use(session({
        secret: 'secret',
    }));

    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(async function (id, done) {
        try {
            Users.findById(id).then((result) => {
                const user = result.shift();
                done(null, user);
            })
        } catch (error) {
            done(error, null);
        }
    });

    passport.use(new LocalStrategy({
        usernameField: "email",
        passwordField: "password",
        }, function(email, password, done) {
            Users.authentication(email, password).then((users) => {
                const user = users.shift()
                if (user) {
                    return done(null, user)
                } else {
                    console.log("login error")
                    return done(null, false, { message: '認証に失敗しました。' })
                }
            });
        }
    ));

    app.use(passport.session());
}