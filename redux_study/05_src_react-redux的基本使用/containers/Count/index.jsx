// 引入 Count 的UI组件
import CountUI from "../../components/Count"
// 引入 connect 用于连接UI组件与redux
import { connect } from "react-redux"
import {createIncrementAction,createDecrementAction,createIncrementAsyncAction} from "../../redux/count_action"
// mapStateToProps函数返回的对象中的key作为传递给UI组件props的key，value就作为传递给UI组件props的value
// 传递状态 返回一个对象
function mapStateToProps(state){
  return {count:state}
}

// mapDispatchToProps函数返回的对象中的key就作为传递给UI组件props的key，value就作为传递给UI组件props的value
// 操作状态的方法 返回一个对象，value值为函数
function mapDispatchToProps(dispatch){
  return {
     // 通知 reudx 执行加法
    increment:(number)=> dispatch(createIncrementAction(number)),
    decrement:(number)=>dispatch(createDecrementAction(number)),
    incrementAsync:(number)=>dispatch(createIncrementAsyncAction(number,1000))
  }
}


// 创建一个Count的容器组件
const CountContainer = connect(mapStateToProps,mapDispatchToProps)(CountUI)

export default CountContainer
