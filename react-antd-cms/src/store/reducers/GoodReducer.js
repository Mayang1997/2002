// 商品管理 reducer

import { GOOD_LIST,GOOD_CATE,GOOD_INFO,GOOD_DEL,GOOD_DETAIL } from '@/store/actionType';


// 定义初始化state状态
let initState = {
    list: [],
    cates: [],
    good: {}
}

export default function GoodReducer(state=initState, action){

    // 深复制 state
    let newState = JSON.parse(JSON.stringify(state))

    switch (action.type) {
        case GOOD_LIST:
            console.log("商品列表",action.payload)
            // 通过 页面视图 dispacth 派发过来得 异步action 来更新 state
            newState.list = action.payload
            return newState;
        case GOOD_CATE:
            // 通过 页面视图 dispacth 派发过来得 异步action 来更新 state
            newState.cates = action.payload
            return newState;
        case GOOD_INFO:
            // 通过 页面视图 dispacth 派发过来得 异步action 来更新 state
            // newState.cates = action.payload
            return newState;
        case GOOD_DEL:
            return newState;
        case GOOD_DETAIL:
            newState.good = action.payload
            return newState;
        default:
            return newState;
    }
}