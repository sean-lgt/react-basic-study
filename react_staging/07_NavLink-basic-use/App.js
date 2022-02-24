import React, { Component } from 'react'
import { Link,Route,Routes,NavLink } from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'

export default class App extends Component {
 
  render() {
    return (
     <div>
         <div className="row">
           <div className="col-xs-offset-2 col-xs-8">
              <Header></Header>
           </div>
         </div>
       
         <div className="row">
           <div className="col-xs-2 col-xs-offset-2">
             <div className="list-group">
               {/* <a className="list-group-item" href="./about.html">About</a>
               <a className="list-group-item active" href="./home.html">Home</a> */}

               {/* 在react中靠路由链接实现切换组件 编写路由链接*/}
                 <NavLink  className="list-group-item" to="/about">About</NavLink>
                 <NavLink  className="list-group-item" to="/home">Home</NavLink>
             </div>
           </div>
           <div className="col-xs-6">
             <div className="panel">
               <div className="panel-body">
                    {/* 注册路由 */}
                    <Routes>
                      <Route path="/about"  element={ <About/> } ></Route>
                      <Route path="/home" element={ <Home/> } ></Route>
                    </Routes>
                    
               </div>
             </div>
           </div>
         </div>
      </div>
    )
  }
}
