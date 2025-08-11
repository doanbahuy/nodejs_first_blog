const Course = require('../models/Course');

const courses = [
    { name: "NodeJS", description: "Learn NodeJS" },
    { name: "ReactJS", description: "Learn ReactJS" },
    { name: "ExpressJS", description: "Learn ExpressJS" }
];
class SiteController{

    // [GET] /
    index(req, res, next) {
        res.render('home', {courses});
        // Course.find({})
        //     .then(courses => res.render('home', { courses }))
        //     .catch(next);
    }
    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}
module.exports = new SiteController();