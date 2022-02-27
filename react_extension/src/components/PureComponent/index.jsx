import React, { PureComponent } from 'react'
import "./index.css"

export default class parent extends PureComponent {

  state = {
    carName:'奔驰A6',
    stus:['小三','小四']
  }

  addStu = ()=>{
    // 不要从写这种形式，需要纯函数
    /*const {stus} = this.state
    stus.unshift('小lin')
    this.setState({stus})*/

    const {stus} = this.state
    this.setState({
      stus:['小林',...stus]
    })
  }

  changeCar = ()=>{
    const obj = this.state
    obj.carName = '迈巴赫'
    this.setState(obj)
  }

  /* shouldComponentUpdate(nextProps,nextState){
		// console.log(this.props,this.state); //目前的props和state
		// console.log(nextProps,nextState); //接下要变化的目标props，目标state
		return !this.state.carName === nextState.carName
	} */

  render() {
    console.log('Parent---render');
		const {carName} = this.state
		return (
			<div className="parent">
				<h3>我是Parent组件</h3>
				{this.state.stus}&nbsp;
				<span>我的车名字是：{carName}</span><br/>
				<button onClick={this.changeCar}>点我换车</button>
				<button onClick={this.addStu}>添加一个小刘</button>
				<Child carName="奥拓"/>
			</div>
		)
  }
}

class Child extends PureComponent {

  /* shouldComponentUpdate(nextProps,nextState){
		console.log(this.props,this.state); //目前的props和state
		console.log(nextProps,nextState); //接下要变化的目标props，目标state
		return !this.props.carName === nextProps.carName
	} */

  render() {
    console.log('Child---render');
		return (
			<div className="child">
				<h3>我是Child组件</h3>
				<span>我接到的车是：{this.props.carName}</span>
			</div>
		)
  }
}
