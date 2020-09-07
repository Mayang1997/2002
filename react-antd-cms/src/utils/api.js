import axios from './fetch.js';

// 封装 axios 请求
// 导出函数

// 首页商品列表 { page, size }
export function fetchGoodList(params){
    return axios({
        url: '/jd/getHotGoodList',
        method: 'GET',
        // 注意：在axios请求中，GET请求的入参为 params，POST的请求的入参为 data
        params
    })
}

// 获取商品详情 { good_id }
export function fetchGoodDetail(params){
    return axios({
        url: '/jd/getGoodDetail',
        method: 'GET',
        params
    })
}

// 添加商品
export function fetchCreateGood(data) {
    return axios({
      url: '/goods/addgood',
      method: 'POST',
      data
    })
}

// 删除商品
export function fetchDelGood(params){
    return axios({
        url: '/goods/delGood',
        method: 'GET',
        params
      })
}



// 添加购物车 { good_id }
export function fetchAddToCart(data){
    return axios({
        url: '/jd/addToCart',
        method: 'POST',
        data
    })
}

// 注册 {username, password, password2 }
export function fetchRegist(data) {
    return axios({
        url: '/users/cms/regist',
        method: 'POST',
        data
    })
}

// 登录 {username, password }
export function fetchLogin(data) {
    return axios({
        url: '/users/cms/login',
        method: 'POST',
        data
    })
}

// 获取购物车商品列表 {}
export function fetchCartList(params) {
    return axios({
        url: '/jd/getCartList',
        method: 'GET',
        params
    })
}

// 修改购物车中的商品数量 {num, id}
export function fetchUpdateNum(data) {
    return axios({
        url: '/jd/updateCartNum',
        method: 'POST',
        data
    })
}

// 删除购物车中的一个商品 {id }
export function fetchDeleteGood(params) {
    return axios({
        url: '/jd/deleteToCart',
        method: 'GET',
        params
    })
}

//提交购物车{goods}这个入参是商品的_id+;拼接成字符串
export function fetchCartSubmit(data) {
    return axios({
        url: '/jd/submitToCart',
        method: 'POST',
        data
    })
}

// 获取所有品类 {}
export function fetchAllCates(params) {
    return axios({
        url: '/jd/getAllCates',
        method: 'GET',
        params
    })
}

// 用cate品类查询所有商品 {cate}
export function fetchGoodsOfCate(params) {
    return axios({
        url: '/jd/getCateGoodList',
        method: 'GET',
        params
    })
}

