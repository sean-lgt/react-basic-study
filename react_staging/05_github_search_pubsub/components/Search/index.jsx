import React, { Component } from 'react'
import axios from 'axios'
import PubSub from "pubsub-js"
export default class Search extends Component {

  search = ()=>{
    // 发布消息
    PubSub.publish('test','aa')
    const { value } = this.keyWordElement
    // 发送请求前通知List更新状态
    // this.props.updateState({
    //   isFirst:false,
    //   isLoading:true
    // })
    // 发布消息
     PubSub.publish('updateState',{
       isFirst:false,
       isLoading:true
     })
    axios.get(`http://localhost:3000/api1/search/users?q=${value}`).then(res=>{
      console.log("请求获取到的数据",res.data)
      // this.props.saveUsers(res.data.items)
      // this.props.updateState({
      //    isLoading:false,
      //    users:res.data.items
      // })
     PubSub.publish('updateState',{
       isLoading:false,
       users:res.data.items
     })
    }).catch(error=>{
      console.log("请求出现错误",error)
      // this.props.updateState({
      //    isLoading:false,
      //    err:error
      // })
      PubSub.publish('updateState',{
        isLoading:false,
        err:error
      })
    })
  }

  render() {
    return (
      <section className="jumbotron">
          <h3 className="jumbotron-heading">搜索github用户</h3>
          <div>
            <input ref={c=>this.keyWordElement = c} type="text" placeholder="输入关键词点击搜索"/>&nbsp;
            <button onClick={this.search}>搜索</button>
          </div>
      </section>
    )
  }
}
