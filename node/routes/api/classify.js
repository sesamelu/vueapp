var express = require('express');
var router = express.Router();
var mongodb = require('../../utils/mongo')
//home根据请求的地址，判断是请求列表还是请求详情页
//请求详情页有两种写法_id或者/:id
router.get('/', function(req, res, next) {
  //后端允许跨域
  // res.setHeader('Access-Control-Allow-Origin', true);
  
  let {_id,_page,_limit,_sort,q}=req.query
  q = q ? {$or:[{title:eval('/'+q+'/')},{price:eval('/'+q+'/')}]}:{}
  if(_id){
    //说明请求的是详情页
    findDetail({_id,req,res,next})
  }else{
    //请求的是列表，需要找数据库获取数据
    mongodb({
      collectionName:'classify',
      success:({collection,client})=>{
        //注意：进入回调地狱了，最好用promise
        collection.find(
          //找到标题中包含q或者描述中包含q的数据,q是遍历，不能直接写在正则中，使用eval方法解析出来
          q
        ,{
          sort:{[_sort]:-1},//属性是动态的要用[]括起来
          skip:_page * _limit,
          limit:_limit

        }).toArray((err,result)=>{
          if(err){
            res.send({err:1,msg:'classify集合请求失败'})
          }else{
            res.send({err:0,data:result})
          }
          client.close()
        })
      },
      error:(err)=>{console.log(err)}
    })
  }
});


router.get('/:id',function(req,res,next){
  //这里请求的也是详情页
  //这里的：id需要用req.params得到
  findDetail({_id:req.params.id,req,res,next})

})

function findDetail({_id,req,res,next}){
  mongodb({
    collectionName:'classify',
    success:({collection,client,ObjectID})=>{
      //注意：进入回调地狱了，最好用promise
      collection.find({
        //注意mongo这里的id并不是字符串,而是个对象型的字符串
        // _id:_id
        //ObjectId这个方法是mongodb的，需要在mongodb中解析
        _id:ObjectID(_id)
      },{
      }).toArray((err,result)=>{
        if(err){
          res.send({err:1,msg:'classify集合请求失败'})
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
}


module.exports = router;
