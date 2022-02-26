import React, { Component } from 'react'
import { Button,DatePicker } from 'antd';
// 按需引入antd样式，不再全局引入
// import "antd/dist/antd.css"

// 引入图标库
import { WechatOutlined,SearchOutlined } from '@ant-design/icons';
export default class App extends Component {
  onChange = (event)=>{
    console.log("aa",event)
  }
  render() {
    return (
      <div>
      App
         <Button type="primary">antd按钮1</Button>
         <Button>antd按钮2</Button>
         <Button type="link">antd按钮3</Button>
         <WechatOutlined />
         <Button type="primary" icon={<SearchOutlined />}>
              Search
         </Button>
         <DatePicker onChange={this.onChange} />
      </div>
    )
  }
}
