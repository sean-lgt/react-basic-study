
import {ADD_PERSON} from "../constant"
// 初始化列表
const initState = [{id:'001',name:'tom',age:18}]
export default function personReducer (perSate = initState,action){
  const {type,data} = action
  switch (type) {
    case ADD_PERSON:
      return [data,...perSate]
    default:
      return perSate
  }
}