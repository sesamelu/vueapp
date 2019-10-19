var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({
    title:'测试公共参数配置',
    query:req.query,
    body:req.body

  });
});

module.exports = router;
