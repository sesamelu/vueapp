var express = require('express');
var router = express.Router();

//注销：将session的值改为undefined就可以了
router.delete('/', function(req, res, next) {
  req.session['vueobj_session']=undefined
  res.send({err:0,msg:'注销成功'})
});

module.exports = router;
