// 引入createStore,专门创建 redux 中最为核心的 store 对象
import {createStore,applyMiddleware,combineReducers} from "redux"
// 引入 redux-thunk 用于支持异步 action
import thunk from "redux-thunk"

// 引入为Count组件服务的 reducer
import countReducer from "./reducers/count"
// 引入为person组件服务的 reducer
import personReducer from "./reducers/person"

// 合并所有reducer
// 汇总所有reducer 合并成一个 总的reducer 
const allReducer = combineReducers({
  he:countReducer,
  rens:personReducer
})


const store = createStore(allReducer,applyMiddleware(thunk))
// 暴露store
export default store