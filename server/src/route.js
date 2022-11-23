const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/test', controller.api.test);
router.get('/file', controller.api.file);
router.get('/testDb', controller.api.testDb);

router.post('/testPost', controller.api.testPost);
router.post('/api/login', controller.api.login);

module.exports = router;