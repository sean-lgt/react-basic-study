import React, { Component } from 'react'
// 引入 axios
import axios from "axios"
import Search from './components/Search'
import List from './components/List'

export default class App extends Component {
 
  render() {
    return (
      <div className="container">
        <Search></Search>
        <List></List>
      </div>
    )
  }
}
