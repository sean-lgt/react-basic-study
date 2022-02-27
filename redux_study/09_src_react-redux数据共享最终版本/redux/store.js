// 引入createStore,专门创建 redux 中最为核心的 store 对象
import {createStore,applyMiddleware,combineReducers} from "redux"
// 引入 redux-thunk 用于支持异步 action
import thunk from "redux-thunk"
// 引入开发工具扩展
import {composeWithDevTools} from "redux-devtools-extension"

// 引入所有的reducer
import allReducer from "./reducers"

const store = createStore(allReducer,composeWithDevTools(applyMiddleware(thunk)))
// 暴露store
export default store