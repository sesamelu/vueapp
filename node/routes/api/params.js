module.exports = (req,res,next)=>{
    //设置地址栏公共参数
    req.query._page = req.query._page ? req.query._page-1:require('../../config/params')._page-0;
    req.query._limit = req.query._limit ? req.query._limit-0:require('../../config/params')._limit-0;
    req.query.q = req.query.q ? req.query.q:require('../../config/params').q;
    req.query._sort = req.query._sort ? req.query._sort:require('../../config/params')._sort;
    //非地址栏
    req.body._page = req.body._page ? req.body._page-1:require('../../config/params')._page-0;
    req.body._limit = req.body._limit ? req.body._limit-0:require('../../config/params')._limit-0;
    req.body.q = req.body.q ? req.body.q:require('../../config/params').q;
    req.body._sort = req.body._sort ? req.body._sort:require('../../config/params')._sort;



    next()
}