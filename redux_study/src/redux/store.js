// 引入createStore,专门创建 redux 中最为核心的 store 对象
import {createStore} from "redux"
// 引入为Count组件服务的 reducer
import countReducer from "./count_reducer"

const store = createStore(countReducer)
// 暴露store
export default store