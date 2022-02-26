// 引入createStore,专门创建 redux 中最为核心的 store 对象
import {createStore,applyMiddleware} from "redux"
// 引入为Count组件服务的 reducer
import countReducer from "./count_reducer"
// 引入 redux-thunk 用于支持异步 action
import thunk from "redux-thunk"

const store = createStore(countReducer,applyMiddleware(thunk))
// 暴露store
export default store