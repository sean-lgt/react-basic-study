// 为 count 组件生成 action 对象

// 引入常量，定义action中的type
import {INCREMENT,DECREMENT} from "./constant"

// 同步action，指的是 action 返回的是对象
export const createIncrementAction = data => ({ type:INCREMENT,data})

export const createDecrementAction = data => ({ type:DECREMENT,data})

// 异步action，指的是 action 返回的是函数
// 异步action，返回的函数给store调用，可携带参数dispatch  一般都会调用同步action
export const createIncrementAsyncAction = (data,time) =>{
  return (dispatch)=>{
    setTimeout(()=>{
      dispatch(createIncrementAction(data))
    },time)
  }
}

