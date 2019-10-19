import Vue from 'vue'
import Vuex from 'vuex'
//console.los(Vuex);//store类 mapActions函数 mapGetters函数
Vue.use(Vuex)

import actions from '../store/actions'
import mutations from '../store/mutations'
import state from '../store/state'
import getters from '../store/getters'

export default new Vuex.Store({
    actions,mutations,state,getters

})