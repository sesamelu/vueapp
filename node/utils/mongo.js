let mongodb = require('mongodb');
let mongoCt = mongodb.MongoClient;
let ObjectID = mongodb.ObjectID

module.exports=({url,dbName,collectionName,error,success})=>{
    url=url||'mongodb://127.0.0.1:27017'
    dbName=dbName||'vueobj2'
    collectionName||'banner'
    mongoCt.connect(url,{useNewUrlParser: true,useUnifiedTopology: true},(err,client)=>{
        if(err){
            // 使用回调函数把错误信息传出去
            error && error('链接库错误')
        }else{
            let db = client.db(dbName)
            let collection = db.collection(collectionName)
            success && success({collection,client,ObjectID})
           
        }
    })
}


