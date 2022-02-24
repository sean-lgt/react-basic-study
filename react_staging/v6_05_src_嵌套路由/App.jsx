import React from 'react'
import {NavLink,useRoutes} from "react-router-dom"
// 引进路由表
import routes from './routes'
import "./App.css"
export default function App() {

  // 路由表  根据路由表生成对应的路由规则
  const elementRoutes = useRoutes(routes)


  return (
    <div>
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <div className="page-header"><h2>React Router Demo</h2></div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-2 col-xs-offset-2">
        <div className="list-group">
          {/* 路由链接 */}

          <NavLink className={({isActive})=>isActive?'list-group-item my-active':'list-group-item'}  to="/about">About</NavLink>
          <NavLink className={({isActive})=>isActive?'list-group-item my-active':'list-group-item'} to="/home">Home</NavLink>
        </div>
      </div>
      <div className="col-xs-6">
        <div className="panel">
          <div className="panel-body">
            {/* 注冊組件  useRoutes 注册路由表*/}
            {elementRoutes}
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
