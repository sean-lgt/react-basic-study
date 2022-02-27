import React, { Component,Fragment} from 'react'
// import Demo from './components/LazyLoad'
// import Demo from './components/Hooks'
// import Demo from "./components/Fragment"
// import Demo from "./components/Context"
// import Demo from "./components/PureComponent"
// import Demo from "./components/renderProps"
import Demo from "./components/ErrorBoundary/Parent"

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Demo/>
      </Fragment>
    )
  }
}
