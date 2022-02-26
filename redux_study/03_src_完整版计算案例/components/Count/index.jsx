import React, { Component } from 'react'

// 引入 store 用于获取count的状态
import store from "../../redux/store"
// 引入 actionCreater ，专门用于创建action对象
import {createDecrementAction,createIncrementAction} from "../../redux/count_action"

export default class Count extends Component {

  // state = {count:0}
  componentDidMount(){
    //检测redux状态的变化，只要有变化，就自动调用render
    store.subscribe(()=>{
      this.setState({})
    })
  }

  increment = ()=>{
    const {value} = this.selectNumber
    // 通知redux加value
    store.dispatch(createIncrementAction(value * 1))
  }

  decrement = ()=>{
    const {value} = this.selectNumber
    // 通知redux加value
    store.dispatch(createDecrementAction(value * 1))
  }  

  incrementIfOdd = ()=>{
    const {value} = this.selectNumber
    const count = store.getState()
    if(count % 2 !== 0){
      store.dispatch(createIncrementAction(value * 1))
    } 
    
  }

  incrementAsync = ()=>{
    const {value} = this.selectNumber
    setTimeout(()=>{
      store.dispatch(createIncrementAction(value * 1))
    },1500)
     
  }

  render() {
    return (
      <div>
        <h1>当前求和为：{store.getState()}</h1>
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
