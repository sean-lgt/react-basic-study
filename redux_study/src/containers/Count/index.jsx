import React, { Component } from 'react'
// 引入 connect 用于连接UI组件与redux
import { connect } from "react-redux"
import {createIncrementAction,createDecrementAction,createIncrementAsyncAction} from "../../redux/count_action"


// 定义UI组件
class Count extends Component {


  increment = ()=>{
    const {value} = this.selectNumber
    this.props.increment(value * 1)
  }

  decrement = ()=>{
    const {value} = this.selectNumber
    this.props.decrement(value * 1)
  }  

  incrementIfOdd = ()=>{
    const {value} = this.selectNumber
    if(this.props.count % 2 !==0){
      this.props.increment(value * 1)
    }
  }

  incrementAsync = ()=>{
    const {value} = this.selectNumber
    this.props.incrementAsync(value*1,1000)
  }

  render() {
    console.log("UI容器传递过来的",this.props)
    return (
      <div>
        <h1>当前求和为：{this.props.count}</h1>
        <select ref={c=>this.selectNumber = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>
      </div>
    )
  }
}


// 创建一个Count的容器组件
const CountContainer = connect(state=>({
  count:state
}),{
   // mapDispatchToProps 简写方式，让 react-redux 自动分发，省去dispatch
   // mapDispatchToProps 两种写法，一种是常规的函数，一种是对象形式，让 react-redux 自动分发
    increment:createIncrementAction,
    decrement:createDecrementAction,
    incrementAsync:createIncrementAsyncAction
})(Count)

export default CountContainer



// mapStateToProps函数返回的对象中的key作为传递给UI组件props的key，value就作为传递给UI组件props的value
// 传递状态 返回一个对象
// 映射状态
const mapStateToProps = state=>({
  count:state
})


// mapDispatchToProps函数返回的对象中的key就作为传递给UI组件props的key，value就作为传递给UI组件props的value
// 操作状态的方法 返回一个对象，value值为函数
// 映射操作状态的方法
const mapDispatchToProps = dispatch =>({
    // 通知 reudx 执行加法
    increment:(number)=> dispatch(createIncrementAction(number)),
    decrement:(number)=>dispatch(createDecrementAction(number)),
    incrementAsync:(number)=>dispatch(createIncrementAsyncAction(number,1000))
})
   



