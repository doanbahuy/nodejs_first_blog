const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

router.get('/search', siteController.search);

router.get('/', siteController.index);

// Export the router
module.exports = router;