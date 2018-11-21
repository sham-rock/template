import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        loadingStatus:false
    },
    getters:{
        loadingFlag(state){
           return state.loadingStatus;
        }
    },
    mutations: {
        increment (state,flag) {
           state.loadingStatus = flag;
        }
      },
    actions:{
        closeLoading({commit}){
            // {commit}指从对象中取出commit es6参数解构
            commit('increment',false) 
        },
        openLoading({commit}){
            commit('increment',true) 
        }
    }
})

export default store