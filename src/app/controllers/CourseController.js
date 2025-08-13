const Course = require("../models/Course");

class CourseController{

    // [GET] /courses/:slug
    show(req, res) {
        res.send('Courses detail ' + req.params.slug);
    }

    // [GET] /courses/create
    create(req, res, next) {
        res.render('courses/create');
    }

    // [POST] /courses/store
    store(req, res, next) {
        const formData = req.body;
        res.send(formData);
        course.save()
        .then(() => res.redirect('/'))
        .catch(error => {
            console.error('Error saving course:', error);
            res.status(500).send('Internal Server Error');
        });
    }
}

module.exports = new CourseController();