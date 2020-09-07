// 商品管理 action 生成器

// 导入http请求得 api
import { 
    fetchGoodList,
    fetchAllCates,
    fetchCreateGood,
    fetchDelGood,
    fetchGoodDetail
} from '@/utils/api';

import { GOOD_LIST,GOOD_CATE,GOOD_INFO,GOOD_DEL,GOOD_DETAIL } from '@/store/actionType';
// 异步action - 请求数据方法
/* 
    异步action - 派发三个action
    1: 页面派发第一个 action 为 getGoodAll 方法
    2: http请求派发第二个 action, 当请求成功时
    3: http请求派发第三个 action, 当请求失败时
*/

// 获取商品列表
export function getGoodAll(params){

    return function (dispacth){
        // params 为请求得入参
        fetchGoodList(params).then(res=>{
            // 此处派发第二个 action
            dispacth({
                type: GOOD_LIST,
                payload: res
            })
        }).catch(err=>{
            // 此处派发第三个action,当发生错误时
            dispacth({
                type: GOOD_LIST,
                payload: err
            })
        })
    } 
}

// 获取所有商品品类
export function getCateAll(params){
    return function (dispacth){
        fetchAllCates(params).then(res=>{
            dispacth({
                type: GOOD_CATE,
                payload: res
            })
        }).catch(err=>{
            dispacth({
                type: GOOD_CATE,
                payload: err
            })
        })
    } 
}

// 添加商品
export function addGoods(data){
    return function (dispacth){
        fetchCreateGood(data).then(res=>{
            console.log(res)
            dispacth({
                type: GOOD_INFO,
                payload: res
            })
        }).catch(err=>{
            dispacth({
                type: GOOD_INFO,
                payload: err
            })
        })
    } 
}

// 删除商品
export function delGood(params){
    return function (dispacth){
        fetchDelGood(params).then(res=>{
            console.log(res)
            dispacth({
                type: GOOD_DEL,
                payload: res
            })
        }).catch(err=>{
            dispacth({
                type: GOOD_DEL,
                payload: err
            })
        })
    } 
}

// 删除商品
export function getDetail(params){
    return function (dispacth){
        fetchGoodDetail(params).then(res=>{
            console.log(res)
            dispacth({
                type: GOOD_DETAIL,
                payload: res
            })
        }).catch(err=>{
            dispacth({
                type: GOOD_DETAIL,
                payload: err
            })
        })
    } 
}