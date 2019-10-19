var express = require('express');
var router = express.Router();
var mongodb = require('../../utils/mongo')
var bcrypt = require('bcrypt')
//登录页：如果传入的用户名和密码都正确时，去兜库
router.post('/', function(req, res, next) {
  let {username,password,save} = req.body
  //username和password是必传参数，
  if(!username||!password){
    res.send({err:1,msg:'用户名和密码为必传参数'})
    return;
  }
  mongodb({
    collectionName:'user',
    success:({collection,client,ObjectID})=>{
      collection.find({
        username:username,
      },{
        
      }).toArray((err,result)=>{
        if(err){
          res.send({err:1,msg:'user集合操作错误'})
        }else{
          if(result.length>0){// 如果result返回数据，证明登录成功
            
            //如果输入的密码和加了盐的密码一致，才种cookie并返回成功，否则提示用户名或密码有误
            let pass=bcrypt.compareSync(password, result[0].password);//pass是true证明密码一致
            if(pass){
              
              if(save){
                //如果用户勾选了保存密码按钮save的值为true,要种cookie
                req.session['vueobj_session']=result[0]._id
              }
              //send代表业务结束，应该先种cookie再结束
              //返回的数据中不要有username和password
              delete result[0].username
              delete result[0].password
              res.send({err:0,msg:'登录成功',data:result[0]})
            }else{
              res.send({err:1,msg:'用户名或密码有误'})
            }            
          }else{
            // console.log(1)
            res.send({err:1,msg:'用户名或密码有误'})
          }
          
        }
      })

    }
  })
  
});

module.exports = router;
