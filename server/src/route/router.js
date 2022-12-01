const express = require('express');
const router = express.Router();
const controller = require('../controller');

//get
router.get('/test', controller.main.test);
router.get('/file', controller.main.file);
router.get('/testDb', controller.main.testDb);

//post
router.post('/testPost', controller.main.testPost);

module.exports = router;