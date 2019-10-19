import data from './data.js'
import fillzero from './fillzero.js'
import Vue from 'vue';

let filters={
    data,
    fillzero
}


// 定义全局过滤器，需要用到vue
//过滤器名：函数
// 使用的时候将过滤器名和函数遍历出来,再定义到全局
// for(var key in filters){
//     Vue.filter(key,filters[key])
// }
//另一种枚举方法
Object.keys(filters).forEach((key)=>{
    Vue.filter(key,filters[key])
})