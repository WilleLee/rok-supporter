const express = require('express');
const router = express.Router();
const controller = require('../controller');

//get
router.get('/readKingsMessage', controller.api.readKingsMessage);

//post
router.post('/login', controller.api.login);
router.post('/kingsMessage', controller.api.kingsMessage);

module.exports = router;