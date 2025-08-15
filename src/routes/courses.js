const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');
const authMiddleware = require('../app/middlewares/AuthMiddleware');

router.get('/create', authMiddleware, courseController.create);
router.post('/store', authMiddleware, courseController.store);
router.get('/:id/edit', courseController.edit);
router.post('/handle-form-actions', courseController.handleFormActions);
router.put('/:id', courseController.update);
router.patch('/:id/restore', courseController.restore);
router.delete('/:id/force', courseController.forceDestroy);
router.delete('/:id', courseController.destroy);


// Export the router
module.exports = router;