var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/list', function (req, res, next) {
    res.json({
      error: 0,
      list: ['1', '2', '3'],
    });
    next();
});
  
module.exports = router;
