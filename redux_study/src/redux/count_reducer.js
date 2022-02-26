// 为Count组件服务的 reducer，本质是一个函数
// reducer 接收两个参数，一个是之前的状态（state），一个是 action
export default function countReducer(preState,action){ 
  const {type,data} = action
  switch (type){
    case "increment":
        return preState + data
    case "decrement":
       return preState - data
    default:
        return preState || 0
  }
}