// 封装 axios 实例;
import axios from 'axios';

// let baseURL = 'https://cnodejs.org/api/v1'  

// let baseURL = 'http://10.36.135.29:9999'  

let baseURL = 'http://localhost:8090/api/v1'

const instance = axios.create({
    baseURL: baseURL,  // 服务器地址
    timeout: 7000,  // 响应超时
    headers: {} 
  });


// 请求拦截器：在请求被发出去之前，做一些验证工作
instance.interceptors.request.use(config=>{
    // 请求成功时触发
    // 鉴权 token添加
    config.headers.Authorization = localStorage.getItem('token') || ''
    return config
},function(error){
    // 请求发生错误时触发
    return Promise.reject(error)
})


// 响应拦截器：在响应到达之前，进行数据过滤，错误处理
instance.interceptors.response.use(function(response){
    if(response.data && response.data.err === 0){
        return response.data.data
    }else{
        console.log('请求错误')
    }
},function(error){
    // 请求发生错误时触发
    return Promise.reject(error)
})

// 导出 axios 实例
export default instance