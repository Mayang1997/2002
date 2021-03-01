// 导入 Redux 核心模块
import { createStore, combineReducers, applyMiddleware } from 'redux';
// 引入 reducer
import TodoReducer from './reducers/TodoReducer';
import GoodReducer from './reducers/GoodReducer';

// 引入 thunk - 是一个中间件,用于redux支持 异步 action
import thunk from 'redux-thunk';

// 合并子纯函数 reducer - 使用模块 combineReducers
const reducer = combineReducers({
    todo: TodoReducer,
    good: GoodReducer
})

// 创建一个 Redux 的核心仓库 store,，只能存在一个store
/* 
    createStore: 给模块函数接收三个参数
    参数一：reducer - 是一个纯函数
    参数二: 可选
    参数三: enhancer ,在这可以使用 redux-thunk 包做 异步action
*/

// 使用 applyMiddleware 为 store 注入 Thunk Middleware
// 这样就可以使用 异步 action
const store = createStore(reducer, applyMiddleware(thunk))

// 抛出 store
export default store