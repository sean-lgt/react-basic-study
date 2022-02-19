import React, { Component } from 'react'
import Item from '../Item'
import "./index.css"
export default class List extends Component {
  
  render() {
    const {todos,updateTodo,deleteTodo} = this.props
    return (
       <ul className="todo-main">
        {
          todos.map((item,index) => {
           return <Item {...item} key={item.id} updateTodo={updateTodo} deleteTodo={deleteTodo}></Item>
          })
        }
       </ul>
    )
  }
}
