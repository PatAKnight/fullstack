var express = require('express');
var router = express.Router();
const controller = require('../controllers/main');

/* GET home page. */
router.get('/index', controller.index);

module.exports = router;
