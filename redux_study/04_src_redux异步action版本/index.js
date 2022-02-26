// 引入React
import React from "react"
// 引入reactDom
import ReactDOM from "react-dom"
// 检测store中状态的改变，一旦发生改变重新渲染 <App/>
// redux 只负责管理状态，至于状态改变驱动着页面的展示，逻辑需要自己编写
import store from "./redux/store"

// 引入App组件
import App from "./App"

ReactDOM.render(
<App />
,document.getElementById("root"))

// 订阅状态改变，重新渲染
store.subscribe(()=>{
  ReactDOM.render(
   <App />
  ,document.getElementById("root"))
})