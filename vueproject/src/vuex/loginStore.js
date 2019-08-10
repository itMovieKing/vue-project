import Vue from 'vue'
import Vuex from 'vuex'
import $http from 'axios'
Vue.use(Vuex)
const lgstore=new Vuex.Store({
    state:{
        username:'',
        password:'',
        test:'test'
    },
    mutations:{
       get(state){
           console.log("test")
       }
    }
})
export default lgstore