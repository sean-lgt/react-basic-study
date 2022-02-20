import React, { Component } from 'react'
// 引入 axios
import axios from "axios"
export default class App extends Component {

  getStudentData = ()=>{
    axios.get("http://localhost:3000/api1/students").then(res=>{
      console.log("请求成功",res)
    }).catch(err=>{
      console.log("请求失败",err)
    })
  }

  getCarData = ()=>{
     axios.get("http://localhost:3000/api2/cars").then(res=>{
      console.log("请求成功",res)
    }).catch(err=>{
      console.log("请求失败",err)
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.getStudentData}>点击获取学生数据</button>
        <button onClick={this.getCarData}>点击获取汽车数据</button>
      </div>
    )
  }
}
