// 用于汇总所的reducer，生成一个总的reducer

// 引入combineReducers 合并所有reducer
import {combineReducers} from "redux"

// 引入为Count组件服务的 reducer
import countReducer from "./count"
// 引入为person组件服务的 reducer
import personReducer from "./person"

// 合并所有reducer
// 汇总所有reducer 合并成一个 总的reducer 
const allReducer = combineReducers({
  count:countReducer,
  persons:personReducer
})

export default allReducer