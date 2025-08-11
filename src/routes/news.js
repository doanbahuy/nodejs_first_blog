const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');

router.get('/:slug', newsController.show);

router.get('/', newsController.index);

// Export the router
module.exports = router;