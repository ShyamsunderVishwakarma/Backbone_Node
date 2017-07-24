var express = require('express')

var router = express.Router();

var genController = require('../controllers/genControllers');

router.get('/wines',genController.getAll);
router.post('/wines',genController.save);
router.delete('/wines/:id',genController.deleteData);

module.exports = router;