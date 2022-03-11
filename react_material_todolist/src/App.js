import React, { Component,Fragment} from 'react'
import {TodoList } from './components/TodoList'
import "./App.css"
export default class App extends Component {
  render() {
    return (
      <Fragment>
        {/* 使用Fragment 可以为虚拟标签，不必需要一个真实的根标签 */}
          <TodoList></TodoList>
      </Fragment>
    )
  }
}