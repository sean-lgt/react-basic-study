// 引入react核心库
import React from "react";
// 引入react-dom
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom"
// 引入App
import App from "./App";
// 挂载到页面上
ReactDOM.render(
<BrowserRouter><App /></BrowserRouter>
,document.getElementById("root"))
