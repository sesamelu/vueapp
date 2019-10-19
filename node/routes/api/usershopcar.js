var express = require('express');
var router = express.Router();
var mongodb = require('../../utils/mongo')

router.post('/', function(req, res, next) {
    let {id,goods} = req.body;
    // console.log(id)
    // console.log(goods)
    // if(!id){
    //   res.send({err:1,msg:'用户id为必传项'})
    //   return;
    // }
    mongodb({
        collectionName: 'user',
        success:({collection,client,ObjectID})=>{
          collection.updateOne({
                    "_id":ObjectID(id)
                  },{
                      $set:{"goods":goods}
                  },(err,result)=>{
                    if(err){
                      res.send({err:1,msg:'user集合请求失败'})
                      client.close()
                    }else{
                      //插入成功后把插入的内容返回，但是不要返回密码，插入的内容在，result. ops中
                      res.send({err:0,msg:'数据更新成功'})
                    }
      
                })
        }
      })
  
})
module.exports = router;





// mongodb({
//     collectionName: 'user',
//     success:({collection,client,ObjectID})=>{
//       collection.find({
//         _id:ObjectID(id)
//       },{

//       }).toArray((err,result)=>{
//         if(err){
//           res.send({err:1,msg:'user集合请求失败'})
//           client.close()
//         }else{
//             //往数据库中插入用户信息
//             collection.updateOne({
//                 "_id":id
//             },{
//                 $set:{"goods":goods}
//             },(err,result)=>{
//               if(err){
//                 res.send({err:1,msg:'user集合请求失败'})
//                 client.close()
//               }else{
//                 res.send({err:0,msg:'修改成功',data:result.ops[0]})
//               }

//             })
//         }
     
//       })
//     }
//   })