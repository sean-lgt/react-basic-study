import React, { Component } from 'react'
import Pubsub from "pubsub-js"
import "./index.css"
export default class List extends Component {

   // 初始化状态
  state = {
    users:[],
    isFirst:true,//是否为第一次打开
    isLoading:false,//是否处于加载中
    err:"",//请求错误信息
  }

  componentDidMount(){
    this.token = Pubsub.subscribe('updateState',(msg,data)=>{
      console.log("消息订阅",data)
      this.setState(data)
    })
  }
  // 组件卸载前需要取消订阅
  componentWillUnmount(){
     Pubsub.unsubscribe("updateState")
  }

  render() {
    console.log("this",this.state)
    const {users,isFirst,isLoading,err} = this.state
    return (
       <div className="row">
          {
            isFirst ? <h2>欢迎使用，输入关键字，随后点击搜索</h2> :
            isLoading ? <h2>Loading……</h2> :
            err ? <h2 style={{color:'red'}}>{err}</h2> :
            users.map((userObj,index)=>{
               return (<div className="card" key={userObj.id}>
                 <a href={userObj.html_url} target="_blank" rel="noreferrer">
                   <img src={userObj.avatar_url} style={{width:'100px'}}/>
                 </a>
                 <p className="card-text">{userObj.login}</p>
              </div>)
            })
          }
       </div>
    )
  }
}
