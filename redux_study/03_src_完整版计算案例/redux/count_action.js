// 为 count 组件生成 action 对象

// 引入常量，定义action中的type
import {INCREMENT,DECREMENT} from "./constant"

export const createIncrementAction = data => ({ type:INCREMENT,data})

export const createDecrementAction = data => ({ type:DECREMENT,data})



