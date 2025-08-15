const Course = require("../models/Course");
const { multipleMongooseToObject} = require('../../util/mongoose');

class MeController{
    // [GET] /courses/:slug
    show(req, res, next) {
        Promise.all([Course.find({}), Course.countDocumentsWithDeleted({deleted: true})])
            .then(([courses, deletedCount]) => {
                res.render('me/stored-courses', {
                    courses: multipleMongooseToObject(courses),
                    deletedCount,
                });
            })
            .catch(next);
    }
    
    trashCourses(req, res, next) {
        Course.findWithDeleted({deleted: true}) 
            .then(courses => {
                res.render('me/trash-courses', { courses: multipleMongooseToObject(courses) });
            })
            .catch(next)
    }
}

module.exports = new MeController();