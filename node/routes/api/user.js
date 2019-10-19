var express = require('express');
var router = express.Router();
var mongodb = require('../../utils/mongo')//这里的mongodb是模块，每次使用都得引入
//登录时拿着cookie携带过来的数据和服务端ssession中的数据进行对比，如果一样，可以取出id，使用id去兜库，找到用户数据返回，如果不一样，则提示去登录
router.get('/', function(req, res, next) {
  let _id = req.session['vueobj_session']
  // console.log(_id)
  if(_id){
    mongodb({
      collectionName:'user',
      success:({collection,client,ObjectID})=>{
        collection.find({
          _id:ObjectID(_id)
        },{
        }).toArray((err,result)=>{
          if(err){
            res.send({err:1,msg:'user集合请求失败'})
          }else{
            if(result.length>0){
              res.send({err:0,data:result[0]})
            }else{
              res.send({err:1,msg:'未查询到'})
            }
          }
          client.close()
        })
      },
      error:(err)=>{console.log(err)}
    })
  }else{
    res.send({err:1,msg:'请先登录'})
  }
});

module.exports = router;
