// Reducer 必须是一个纯函数，该函数接收两个重要的参数
/* 
    state: 是当前纯函数的共享数据存储中心，是只读数据,唯一修改state的方式为触发 action
    action: 是一个描述应用 (state) 变化的普通对象，是把数据传入store的唯一途径,需要dispatch派发
    dispatch: 分发action，触发state变化的唯一途径
*/

// action(行为) 对象
/* 
    属性一: type - 你要触发什么行为,就是你要做什么类型的事
    属性二: payload - 信息,页面视图传递给 state 的信息 (增删改查)
    action = {
        type: 'add', 
        payload: ''
    }
*/

// action type 集合
import { TODO_COUNT,TODO_DEL,TODO_UPD } from '@/store/actionType';


// 给当前纯函数应用的 state 添加初始值,可被所有组件使用
// state 中的数据通过 reducer 纯函数的mapStateToProps方法将数据映射到组件的this.props中
// 这样在组件中就能使用到 store 的数据
let initStaye = {
    count: 1000,
    list: [{id: 1, task: '吃饭'}]
}

export default function TodoReducer(state=initStaye, action){
    // action - 接收到页面视图发过来的 action
    // console.log("收到",action)

    // 在纯函数内部使用 switch 来处理dispatch派发过来不同的 action 任务
    // 在操作前,先对state做深复制,得到一个 newstate
    // 通过 newstate 操作,最后返回 newState
    
    // 先深复制.在修改
    let newState = JSON.parse(JSON.stringify(state))

    switch (action.type) {
        // 根据type类型来做对应的事
        case TODO_COUNT:
            // 深复制完毕后修改 state 的状态
            newState.count = action.payload
            return newState;
        case TODO_DEL:
            newState.list = newState.list.filter(item=>item.id !== action.payload);
            return newState;
        case TODO_UPD:
            newState.list.push(action.payload)
            return newState;
        default:
            return newState;
    }
}