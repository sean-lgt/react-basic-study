import React, { Component } from 'react'
// 引入 axios
import axios from "axios"
import Search from './components/Search'
import List from './components/List'

export default class App extends Component {
  // 初始化状态
  state = {
    users:[],
    isFirst:true,//是否为第一次打开
    isLoading:false,//是否处于加载中
    err:"",//请求错误信息
  }

  saveUsers = (users)=>{
    console.log("保存用户数据",users)
    this.setState({users})
  }

  updateState = (stateObj)=>{
    this.setState(stateObj)
  }

  render() {
    const {users} = this.state
    return (
      <div className="container">
        <Search saveUsers={this.saveUsers} updateState={this.updateState}></Search>
        <List users={users} {...this.state}></List>
      </div>
    )
  }
}
