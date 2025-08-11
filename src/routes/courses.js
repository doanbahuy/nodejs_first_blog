const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

router.get('/:slug', courseController.show);

// Export the router
module.exports = router;