const User = require('../models/User');
const { multipleMongooseToObject} = require('../../util/mongoose');
const Course = require('../models/Course');

class AuthController{
    // [POST] /register
    register(req, res) {
        const formData = req.body;
        const user = new User(req.body);
        user.save()
            .then(() => res.redirect('/'))
            .catch(err => {
                console.error(err);
                res.status(500).send('Error registering user');
            });
    }
    // [POST] /login
    login(req, res) {
        const formData = req.body;
        
        Promise.all([
            Course.find({}),
            User.findOne({ email: formData.email, passWord: formData.passWord })
        ])
            .then(([courses, user]) => {
                if (user) {
                    req.session.user = user;
                    req.session.isAuthenticated = true;
                    res.render('home', {
                        user: req.session.user,
                        isAuthenticated: req.session.isAuthenticated,
                        courses: multipleMongooseToObject(courses)
                    });
                } else {
                    res.status(401).send('Invalid email or password');
                }
            })
            .catch(err => {
                console.error(err);
                res.status(500).send('Error logging in');
            });
    }
    // [POST] /logout
    logout(req, res) {
        req.session.destroy((err) => {
            if (err) {
                console.error('Logout error:', err);
                return res.status(500).send('Error logging out');
            }
            res.redirect('/');
        });
    }
}
module.exports = new AuthController();