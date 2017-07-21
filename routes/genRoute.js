var express = require('express')

var router = express.Router();

var genController = require('../controllers/genControllers');

router.get('/wines',genController.getAll);

module.exports = router;