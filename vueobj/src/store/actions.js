import * as types from './types'
import axios from 'axios'
export default{
    [types.VIEW_LOADING]:({state,commit},payload)=>{
        commit(types.VIEW_LOADING,payload)
    },
    [types.VIEW_HEADER]:({state,commit},payload)=>{
        commit(types.VIEW_HEADER,payload)
    },
    [types.VIEW_FOOTER]:({state,commit},payload)=>{
        commit(types.VIEW_FOOTER,payload)
    },
    [types.UPDATE_HOME]:({state,commit},payload)=>{
        axios({
            url:'http://localhost:3000/api/home',
            params:{
                _page:1,
                _limit:8
            }
        }).then(
            res=>commit(types.UPDATE_HOME,res.data.data)
        )
    },
    [types.UPDATE_CLASSIFY]:({state,commit},payload)=>{
        axios({
            url:'http://localhost:3000/api/classify',
            params:{_page:1,_limit:10}
        }).then(
            res=>commit(types.UPDATE_CLASSIFY,res.data.data)
        )
    },
    [types.UPDATE_BANNER]:({state,commit},payload)=>{
        axios({
            url:'http://localhost:3000/api/banner',
        }).then(
            res=>commit(types.UPDATE_BANNER,res.data.data)
        )
    },
    [types.UPDATE_DETAIL]:({state,commit},{dataName,id})=>{
        axios({
            url:`http://localhost:3000/api/${dataName}/${id}`
        }).then(
            res=>{
                commit(types.UPDATE_DETAIL,{})
                commit(types.UPDATE_DETAIL,res.data.data)
            }
            
        )
    },
    [types.CHECK_USER]:({state,commit},{username,password,save})=>{
       return axios({
        url:'http://localhost:3000/api/login',
        data:{
          username,
          password,
          save
        },
        method:'post',
      }).then(
        res=>{
            //一手把数据发到mutations
            //一手把数据返回给目标组件login
            commit(types.CHECK_USER,res.data)
            // console.log(res.data)
            //存储到localstorage中
            window.localStorage.setItem('user',JSON.stringify(res.data))
            return {
                err:res.data.err,
                msg:res.data.msg
            }
        }
      )
    },
    //添加商品到购物车
    [types.ADD_ITEM]:({state,commit},payload)=>{
        let arr=[...state.user.data.goods]//把store中goods中的每个对象拿出来，遍历每个对象，找出和点击商品id相同的对象
        let find=false
        arr.forEach((item,index)=>{
            if(item._id==payload._id){//payload参数：_id
                item.count++;
                find=true;
            }
        })
        if(!find){
            payload.count=1;
            arr.push(payload)
        }
        commit('ADD_ITEM',arr)
        // console.log(arr)
    },

    //修改商品数量
    [types.CHANGE_ITEM]:({state,commit},payload)=>{
        state.user.data.goods.forEach((item,index)=>{
            if(item._id==payload._id){
                item.count+=payload.count
                if(item.count<1){
                    item.count=1
                }
            }
        })
        commit('CHANGE_ITEM',[...state.user.data.goods])
    },
    [types.REMOVE_ITEM]:({state,commit},payload)=>{
        state.user.data.goods.forEach((item,index)=>{
            if(item._id==payload._id){
                state.user.data.goods.splice(index,1)
                item.check=false
            }
        })
        commit('REMOVE_ITEM',[...state.user.data.goods])
    },
    [types.CHECK_ITEM]:({state,commit},payload)=>{
    //     console.log(payload.target.checked)
    //     let arr=[...state.goods]
    //     let check=payload.target.checked
    //     state.goods.forEach((item,index)=>{
    //         if(item._id==payload._id){
    //             item.check=check
    //         }
    //     })
    //     // arr.push({"sum":sum})
    //     commit('CHECK_ITEM',arr)
    },
    [types.CLEAR_BUYCAR]:({state,commit})=>{
        commit('CLEAR_BUYCAR',[])
    },
    




}