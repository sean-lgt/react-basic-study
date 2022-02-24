import React, { Component } from 'react'
import MyNavLink from '../../components/MyNavLink'
import {Routes,Route} from "react-router-dom"
import News from './News'
import Message from './Message'
export default class Home extends Component {
  render() {
    return (
      <div>
        <h3>这是Home组件</h3>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <MyNavLink to="news">News</MyNavLink>
            </li>
             <li>
               <MyNavLink to="message">message</MyNavLink>
            </li>
          </ul>
          {/* 注册路由 */}
          <Routes>
             <Route path="news" element={ <News/> } ></Route>
             <Route path="message" element={ <Message/> } ></Route>
          </Routes>
        </div>
      </div>
    )
  }
}
