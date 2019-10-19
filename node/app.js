var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
let cookieSession = require('cookie-session')
let multer = require('multer')
let mongodb = require('./utils/mongo')
let cors = require('cors')

//搭服务器
var app = express();

//中间件配置
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//静态资源托管
app.use(express.static(path.join(__dirname, 'public','template')));//用户资源存储位置
app.use('/admin',express.static(path.join(__dirname, 'public','admin')));//管理资源存储位置
app.use(express.static(path.join(__dirname, 'public')));//都没找到就找public
//multer配置
// let upload = multer({dest:'./www/upload'})//指定存储位置
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if(req.url.indexOf('user')!==-1 || req.url.indexOf('reg')!==-1){
      cb(null, path.join(__dirname, 'public','upload','user'))
    }else if(req.url.indexOf('banner')!==-1){
      cb(null, path.join(__dirname, 'public','upload','banner'))
    }else{
      cb(null, path.join(__dirname, 'public/upload/product'))
    }
  }
})
let multerObj = multer({storage});
app.use(multerObj.any())

//cookie-seesion配置
let arr=[]
for(var i=0;i<20;i++){
    arr.push('luid'+Math.random())
}
app.use(cookieSession({
    keys:arr,
    name:'luid',
    maxAge:1000*60*60*24
}))

app.use(cors({
  "origin": ["http://localhost:8080","http://localhost:5000","http://localhost:8000","http://127.0.0.1"],  //允许所有前端域名
  "credentials":true,//允许携带凭证，后端向前端种cookie时，前端允许后端种的话会携带凭证，后端还需要前端携带凭证
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE", //被允许的提交方式
  // "allowedHeaders":['Content-Type','Authorization']//被允许的post方式的请求头
}));


// 各种响应
//管理端
// app.use('/admin/apiname',路由)
app.get('/admin/index',(req,res,next)=>{
  res.render('index.ejs',{title:'afdafdsa'})
})
//用户端
// app.use('/api/apiname',路由)
//在执行下面代码之前，先设置一个默认配置，如果地址栏或者非地址栏不传参数的话使用提前设置的默认参数，不至于把库里的所有数据都读出来，这里使用all,先给所有的请求设置默认配置，然后使用next向下传递
//这里并不是路由，而是引入了模块
app.all('/api/*',require('./routes/api/params'))

app.use('/api/home',require('./routes/api/home'))
app.use('/api/banner',require('./routes/api/banner'))
app.use('/api/classify',require('./routes/api/classify'))
app.use('/api/women',require('./routes/api/women'))
app.use('/api/men',require('./routes/api/men'))
app.use('/api/suit',require('./routes/api/suit'))
app.use('/api/user',require('./routes/api/user'))
app.use('/api/login',require('./routes/api/login'))
app.use('/api/reg',require('./routes/api/reg'))
app.use('/api/logout',require('./routes/api/logout'))
app.use('/api/usershopcar',require('./routes/api/usershopcar'))
//代理端
// app.use('/proxy/apiname',路由)





// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  // res.render('error');
  res.send({err:1,msg:'错误的接口或请求方式'})
});

module.exports = app;
