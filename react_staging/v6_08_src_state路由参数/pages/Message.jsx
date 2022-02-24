import React,{useState} from 'react'
import {Link,Outlet} from "react-router-dom"
export default function Message() {

  const [messages] = useState([
    {
      id:'001',
      title:'消息01',
      content:'锄禾日当午'
    },
    {
      id:'002',
      title:'消息02',
      content:'汗滴禾下土'
    },
    {
      id:'003',
      title:'消息03',
      content:'谁知盘中餐'
    },
    {
      id:'004',
      title:'消息04',
      content:'粒粒皆辛苦'
    },
  ])

  return (
    <div>
      <ul>
        {
          messages.map((item,index) =>{
              return (
                <li key={item.id}>
                  <Link to={`detail`} state={{id:item.id,title:item.title,content:item.content}}>{item.title}</Link>&nbsp;&nbsp;
                </li>
              )
          })
        }
      </ul>
      <hr/>
      {/* 指定路由组件的展示位置 */}
      <Outlet></Outlet>
    </div>
  )
}
