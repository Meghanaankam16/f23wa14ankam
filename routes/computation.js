var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var x = Math.random()*100;
    var y = Math.random()*100;

    var hypot = Math.hypot(x,y);
    var ceil = Math.ceil(x);
    var clz32 = Math.clz32(x);
  res.send(`Math.hypot() applied to (${x},${y}) is ${hypot}
  <br>Math.ceil() applied to ${x} is ${ceil}
  <br>Math.clz32() applied to ${x} is ${clz32}`);
});

module.exports = router;
