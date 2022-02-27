import React, { Component } from 'react'

export default class Demo extends Component {
  
  state = {count:0}

  addCount = ()=>{
    const {count} = this.state
    // 写法1  对象式setState  第一个参数是state对象，第二个是回调函数
    this.setState({
      count:count + 1
    },()=>{
      // 由于setState是异步的 
      console.log(this.state.count)
    })
  }

  addCountByFunc = ()=>{
    // 写法2 函数式setState
    this.setState((state,props)=>{
      return {count:state.count + 1}
    })
  }

  render() {
    return (
      <div>
        <h1>当前求和为：{this.state.count}</h1>
        <button onClick={this.addCount}>对象式点我+1</button>
        <button onClick={this.addCountByFunc}>函数式点我+1</button>
      </div>
    )
  }
}
