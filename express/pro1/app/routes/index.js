var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('left');
});

router.get('/global',function(req,res,next){
  res.render('globalLook.html');
});
module.exports = router;
