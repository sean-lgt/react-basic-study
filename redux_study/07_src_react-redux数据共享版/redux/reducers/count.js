// 为Count组件服务的 reducer，本质是一个函数
// reducer 接收两个参数，一个是之前的状态（state），一个是 action

// 引入常量，用于定义action的type
import {INCREMENT,DECREMENT} from "../constant"

export default function countReducer(preState,action){ 
  const {type,data} = action
  switch (type){
    case INCREMENT:
        return preState + data
    case DECREMENT:
       return preState - data
    default:
        return preState || 0
  }
}