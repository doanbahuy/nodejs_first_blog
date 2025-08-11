const Course = require('../models/Course');

const courses = [
    { name: "NodeJS", description: "Learn NodeJS", slug: "nodejs" },
    { name: "ReactJS", description: "Learn ReactJS", slug: "reactjs" },
    { name: "ExpressJS", description: "Learn ExpressJS", slug: "expressJS" }
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