import axios from 'axios'
import store from '../store';
// js页面拿不到vue页面的实例
import '../main.js'
import V from '../main.js';

const Service = axios.create({
    baseURL:'/',
    timeout:10000,
    headers:{
        "Content-Type":"application/x-www-form-urlencoded"
    }
})

function server(options){
    store.dispatch('openLoading')
    return new Promise((res,rej)=>{
        Service({
            url:options.url,
            params:options.params,
            data:options.data,
            method:options.method,
            headers:options.headers||{"Content-Type":"application/json"}
        }).then((response)=>{
            store.dispatch('closeLoading')
            res(response)
        }).catch((err)=>{
            store.dispatch('closeLoading')
            rej(err)
        })
    })
}

function get(url,params){
    store.dispatch('openLoading')
    return new Promise((res,rej)=>{
        axios.get(url,{
            params,timeout:30000
        }).then((response)=>{
            store.dispatch('closeLoading')
            res(response)
        }).catch((err)=>{
            store.dispatch('closeLoading')
            V.$vux.toast.show({
                text:'系统异常',
                type:'warn'
            })
            rej(err)
        })
    })
}

function post(url,data){
    store.dispatch('openLoading')
    return new Promise((res,rej)=>{
        axios.post(url,data,
            {timeout:30000
        }).then((response)=>{
            store.dispatch('closeLoading')
            res(response)
        }).catch((err)=>{
            store.dispatch('closeLoading')
            V.$vux.toast.show({
                text:'系统异常',
                type:'warn'
            })
            rej(err)
        })
    })
}
export default {
    server,get,post
}