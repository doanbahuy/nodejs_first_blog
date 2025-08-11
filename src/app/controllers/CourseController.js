class CourseController{

    // [GET] /courses/:slug
    show(req, res) {
        res.send('Courses detail');
    }
}

module.exports = new CourseController();