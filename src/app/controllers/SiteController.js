const Course = require('../models/Course');
const { multipleMongooseToObject} = require('../../util/mongoose');

const courses = [
    { name: "NodeJS", description: "Learn NodeJS", slug: "nodejs" },
    { name: "ReactJS", description: "Learn ReactJS", slug: "reactjs" },
    { name: "ExpressJS", description: "Learn ExpressJS", slug: "expressJS" }
];

class SiteController{

    // [GET] /
    index(req, res, next) {
       
        Course.find({})
        res.render('home', {courses});
            // .then(courses =>  res.render('home', {
            //     courses:multipleMongooseToObject(courses)
            // }))
            // .catch(next);
    }
    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}
module.exports = new SiteController();