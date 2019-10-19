import * as types from './types'
export default{
    [types.VIEW_LOADING]:(state,payload)=>state.bLoading=payload,
    [types.VIEW_HEADER]:(state,payload)=>state.bHeader=payload,
    [types.VIEW_FOOTER]:(state,payload)=>state.bFooter=payload,
    [types.UPDATE_HOME]:(state,payload)=>state.home=payload,
    [types.UPDATE_BANNER]:(state,payload)=>state.banner=payload,
    [types.UPDATE_CLASSIFY]:(state,payload)=>state.classify=payload,
    [types.UPDATE_DETAIL]:(state,payload)=>state.detail=payload,
    [types.CHECK_USER]:(state,payload)=>state.user=payload,

    //购物车
    [types.ADD_ITEM]:(state,payload)=>state.user.data.goods=payload,
    [types.REMOVE_ITEM]:(state,payload)=>state.user.data.goods=payload,
    [types.CHANGE_ITEM]:(state,payload)=>state.user.data.goods=payload,
    [types.CHECK_ITEM]:(state,payload)=>state.user.data.goods=payload,
    [types.CLEAR_BUYCAR]:(state,payload)=>state.user.data.goods=payload,
    
    
}