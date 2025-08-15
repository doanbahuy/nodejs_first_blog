const express = require('express');
const router = express.Router();

const authController = require('../app/controllers/AuthController');

router.post('/register', authController.register);
router.post('/login', authController.login);
// router.post('/logout', authController.logout);

// Export the router
module.exports = router;