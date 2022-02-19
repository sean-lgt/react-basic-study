import React, { Component } from 'react'
import PropTypes from "prop-types"
import {nanoid} from "nanoid"
import "./index.css"
export default class Header extends Component {

  // props 进行类型和必要性限制
  static propTypes = {
    addTodo:PropTypes.func.isRequired
  }

  // 监听键盘回车
  handleKeyUp = (event)=>{
    const {target,keyCode} = event
    if(keyCode !== 13) return false
    if(target.value.trim()===''){
      console.log("输入不能为空")
      return false
    }
    //创建一个item对象
    const todoObj = {id:nanoid(),name:target.value,done:false}
    this.props.addTodo(todoObj)  //传值给父组件
    target.value = ''
  }

  render() {
    return (
      <div className="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" onKeyUp={this.handleKeyUp}/>
      </div>
    )
  }
}
