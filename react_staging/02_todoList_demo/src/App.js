import React, { Component } from 'react'
import Header from "./components/Header/index"
import Footer from "./components/Footer/index"
import List from "./components/List/index"
import './App.css'

export default class App extends Component {
  // 状态在哪儿 操作状态的方法就再哪儿
  state = {
    todos:[
      {
        id:'001',
        name:'吃饭',
        done:true
      },
      {
        id:'002',
        name:'睡觉',
        done:true
      },
      {
        id:'003',
        name:'打代码',
        done:false
      }
    ]
  }

  
  addTodo = (todoObj)=>{
    const {todos} = this.state
    const newTodos = [todoObj,...todos]
    this.setState({
      todos:newTodos
    })
  }

  updateTodo = (id,done) =>{
    const { todos } = this.state
    const newTodos = todos.map((todoObj)=>{
      if(todoObj.id === id){
        return {...todoObj,done}
      }else{
        return todoObj
      }
    })
    this.setState({todos:newTodos})
  }

  deleteTodo = (id) =>{
    const { todos } = this.state
    const newTodos = todos.filter((todoObj) => {
        return todoObj.id !== id  
    })
    this.setState({todos:newTodos})
  }

  checkAllTodo = (done)=>{
    const {todos} = this.state
    const newTodos = todos.map((todoObj)=>{
      return {...todoObj,done}
    })
    this.setState({
      todos:newTodos
    })
  }

  clearDone = ()=>{
    const { todos } = this.state
    const newTodos = todos.filter((todoObj) => {
        return !todoObj.done 
    })
    this.setState({todos:newTodos})
  }

  render() {
    const { todos } = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}/>
          <List updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} todos={todos}/>
          <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearDone={this.clearDone}/>
        </div>
      </div>
    )
  }
}
