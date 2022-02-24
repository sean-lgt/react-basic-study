import React, { Component } from 'react'
import { Link,Route,Routes,NavLink,Navigate } from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'
import MyNavLink from './components/MyNavLink'
import News from "./pages/Home/News"
import Message from "./pages/Home/Message"

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
                <MyNavLink to="/about">about</MyNavLink>
                <MyNavLink to="/home">home</MyNavLink>
             </div>
           </div>
           <div className="col-xs-6">
             <div className="panel">
               <div className="panel-body">
                    {/* 注册路由 */}
                    <Routes>
                      <Route path="/about"  element={ <About/> } >
                      </Route>
                      <Route path="/home" element={ <Home/> } >
                          <Route path="news" element={ <News/> } ></Route>
                          <Route path="message" element={ <Message/> } ></Route>
                      </Route>
                      {/* 路由重定向 需要放置最下方 */}
                      <Route path="*" element={<Navigate to="/about" />} />
                    </Routes>
                    
               </div>
             </div>
           </div>
         </div>
      </div>
    )
  }
}
