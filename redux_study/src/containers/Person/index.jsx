import React, { Component } from 'react'
import {nanoid} from "nanoid"
import {connect} from "react-redux"
import {createAddPersonAction} from "../../redux/actions/person"

// UI组件
class Person extends Component {

  addPerson = ()=>{
    const name = this.nameNode.value
    const age = this.ageNode.value
    const personObj = {id:nanoid(),name,age}
    this.props.addPerson(personObj)
    this.nameNode.value = ""
    this.ageNode.value = ""
  }

  render() {
    return (
      <div>
        <h2>Person组件</h2>
        <h3>上方组件求和为：{this.props.count}</h3>
        <input ref={c=>this.nameNode = c} type="text" placeholder="输入名字"/>&nbsp;
        <input ref={c=>this.ageNode = c} type="text" placeholder="输入年龄"/>&nbsp;
        <button onClick={this.addPerson}>添加</button>
        <br/>
        <ul>
          {
            this.props.personArr.map((item,index)=>{
              return <li key={item.id}>{item.name}---{item.age}</li>
            })
          }
        </ul>
      </div>
    )
  }
}
// 容器组件
export default connect(
  state => ({
    personArr:state.persons,
    count:state.count
  }),  //映射状态
  {
    addPerson:createAddPersonAction
  }
)(Person)

