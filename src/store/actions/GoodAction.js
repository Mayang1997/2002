// 商品管理 action 生成器

// 导入http请求得 api
import { fetchGoodList } from '@/utils/api';

import { GOOD_LIST } from '@/store/actionType';
// 异步action - 请求数据方法
/* 
    异步action - 派发三个action
    1: 页面派发第一个 action 为 getGoodAll 方法
    2: http请求派发第二个 action, 当请求成功时
    3: http请求派发第三个 action, 当请求失败时
*/
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