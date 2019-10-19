var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var pathLib = require('path');
var mongodb = require('../../utils/mongo')
var fs = require('fs');

//把用户传过来的信息拿到，进行处理
//看数据库中是否已经存在用户，存在则要求重新输入，没有存在则将信息放入数据库
router.post('/', function(req, res, next) {
  let {username,password,nikename,icon} = req.body;
  if(!username||!password){
    res.send({err:1,msg:'用户名和密码为必传参数'})
    return;
  }
  
  // 提前将参数设置好
  let credit = 0;
  let time = Date.now();
  let  goods=[]
  let address='请设置收货地址'
  nikename = nikename || '运动者'

  //将密码加盐
  password = bcrypt.hashSync(password, 10); 

  //设置用户头像，如果用户传了头像，设置为用户传的头像，如果没传头像，使用默认图片
  if(req.files && req.files.length>0){
    //先改名，然后将icon的值改为磁盘路径
    // req.files是一个数组，数组中每个文件是一个对象，通过path属性拿到文件的位置和文件名，
    //将文件名加上扩展名就可以了
    //改完名后设置icon的值为当前路径+文件名
    fs.renameSync(
      req.files[0].path,
      req.files[0].path + pathLib.parse(req.files[0].originalname).ext
    )
    icon = '/upload/user/'+req.files[0].filename+pathLib.parse(req.files[0].originalname).ext

  }else{
    icon = '/upload/noimage.jpg'
  }


  //写库，先查询库里是否已经有用户名，有就提示用户名已经存在
  mongodb({
    collectionName: 'user',
    success:({collection,client})=>{
      collection.find({
        username
      },{

      }).toArray((err,result)=>{
        if(err){
          res.send({err:1,msg:'user集合请求失败'})
          client.close()
        }else{
          //如果result的长度>0说明在数据库中找到了相同的username，提醒用户已经存在，否则将用户信息存入数据库
          if(result.length>0){
            res.send({err:1,msg:'用户名已存在'})
            //将文件删除，这个地方不太懂
            if(icon.indexOf('noimage') === -1){
              fs.unlinkSync('./public'+icon)
              client.close()
            }

          }else{
            //往数据库中插入用户信息
            collection.insertOne({
              username,password,nikename,icon,credit,address,time,goods
            },(err,result)=>{
              if(err){
                res.send({err:1,msg:'user集合请求失败'})
                client.close()
              }else{
                //插入成功后把插入的内容返回，但是不要返回密码，插入的内容在，result. ops中
                delete result.ops[0].password
                res.send({err:0,msg:'用户注册成功',data:result.ops[0]})
              }

            })

          }

        }

      })
    }
  })


});

module.exports = router;
