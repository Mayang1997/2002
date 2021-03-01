// 封装 action 生成器
// action.type 是唯一的,在 页面派发到 store 和在 reducer 中更新 state用到
// 封装 action 让代码更好的管理与维护
// 同时封装 type 防止 type 被重复命名

import { TODO_COUNT,TODO_DEL,TODO_UPD } from '@/store/actionType';

// 设置 count
export function setCount(payload){
    return {
        type: TODO_COUNT,
        payload
    }
}
// 删除 {id}
export function delTodo(payload){
    return {
        type: TODO_DEL,
        payload
    }
}
// 新增 {id, task}
export function updTodo(payload){
    return {
        type: TODO_UPD,
        payload
    }
    
}