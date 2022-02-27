// 引入React
import React from "react"
// 引入reactDom
import ReactDOM from "react-dom"
// 检测store中状态的改变，一旦发生改变重新渲染 <App/>
// redux 只负责管理状态，至于状态改变驱动着页面的展示，逻辑需要自己编写
// import store from "./redux/store"

// 引入store
import store from "./redux/store"
// 
import {Provider} from "react-redux"

// 引入App组件
import App from "./App"

// 此处需要用 provider 包裹 App,目的是让App所有的后代容器组件都能接受到store
ReactDOM.render(
<Provider store={store}>
  <App/>
</Provider>
,document.getElementById("root"))

// 订阅状态改变，重新渲染
// store.subscribe(()=>{
//   ReactDOM.render(
//    <App />
//   ,document.getElementById("root"))
// })