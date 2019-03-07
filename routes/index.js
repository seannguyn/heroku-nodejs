var express = require('express');
var router = express.Router();
var algorithm = require('../function');

/* GET home page. */
router.get('/', function(req, res, next) {
  return res.status(200).json({
    success: true,
    index: true
  })
});

router.get('/function/:functionName', function(req, res, next) {
  functionString = algorithm[req.params.functionName].toString();
  return res.status(200).send(functionString);
});

module.exports = router;
