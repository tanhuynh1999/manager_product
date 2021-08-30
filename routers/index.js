const express = require('express');
const siteController = require('../app/controllers/home.js');

const router = express.Router();

router.get('/', siteController.getHome);

module.exports = router;