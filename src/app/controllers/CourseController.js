const { mongo } = require("mongoose");
const Course = require("../models/Course");
const { mongooseToObject} = require('../../util/mongoose');



class CourseController{

    // [GET] /courses/create
    create(req, res, next) {
        res.render('courses/create');
    }

    // [POST] /courses/store
    store(req, res, next) {
        const formData = req.body;
        const course = new Course(formData);
        course.save()
        .then(() => res.redirect('/'))
        .catch(error => {
            console.error('Error saving course:', error);
            res.status(500).send('Internal Server Error');
        });
    }

    // [GET] /courses/:id/edit
    edit(req, res, next) {
        Course.findById(req.params.id)
        .then(course => {
            if (!course) {
                return res.status(404).send('Course not found');
            }
            res.render('courses/edit', { course: mongooseToObject(course) });
        })
        .catch(next);            
    }

     // [PUT] /courses/:id
    update(req, res, next) {
        Course.updateOne({_id: req.params.id}, req.body)
        .then(() => { 
            res.redirect('/me/stored/courses');
        })
        .catch(next);            
    }
    // [DELETE] /courses/:id
    destroy(req, res, next) {
        Course.delete({_id: req.params.id}, req.body)
        .then(() => res.redirect('/me/stored/courses'))
        .catch(next);            
    }
    // [DELETE] /courses/:id/force
    forceDestroy(req, res, next) {
        Course.deleteOne({_id: req.params.id}, req.body)
        .then(() => res.redirect('/me/stored/courses'))
        .catch(next);            
    }
    // [PATCH] /courses/:id/restore
    restore(req, res, next) {
        Course.restore({})
        .then(() => res.redirect('/me/stored/courses'))
        .catch(next);   
    }
}

module.exports = new CourseController();