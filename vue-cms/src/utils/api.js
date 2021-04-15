import axios from './fetch'

// 登陆注册
// 登录 {username,passwrod}
export function fetchLogin(data) {
    return axios({
        url: '/users/cms/login',
        method: 'POST',
        data
    })
}


// 品类管理
// 获取所有品类
export function fetchCates(params) {
    return axios({
      url: '/cates/cateall',
      method: 'GET',
      params
    })
}

// 增加品类
export function fetchAddCate(data){
    return axios({
        url: '/cates/addcate',
        method: 'POST',
        data
    })
}

// 商品管理 
// 增加商品
// 添加商品
export function fetchCreateGood(data) {
    return axios({
      url: '/goods/addgood',
      method: 'POST',
      data
    })
}

// 获取所有商品
export function fetchGoodAll(params){
    return axios({
        url: '/goods/goodall',
        method: 'GET',
        params
    })
}

// 查询某条数据
// 获取所有商品
export function fetchOneGood(params){
    return axios({
        url: '/goods/onegood',
        method: 'GET',
        params
    })
}

export default {
    fetchLogin,
    fetchCates,
    fetchAddCate,
    fetchCreateGood,
    fetchGoodAll,
    fetchOneGood
}
