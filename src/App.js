import React, {Component} from "react"
import Header from "./Header"
import Main from "./Main"
import eEmitter from "./EventEmitter"

import "./App.css"

class App extends Component {
  state = {
    event1: 0,
    event2: 0,
  }
  componentDidMount() {
    eEmitter.addListener("event/1", () => {
      this.setState({
        event1: this.state.event1 + 1,
      })
    })

    eEmitter.addListener("event/2", () => {
      this.setState({
        event2: this.state.event2 + 1,
      })
    })
  }
  render() {
    return (
      <div className="App">
        <Header />
        <div>{this.state.event1}</div>
        <div>{this.state.event2}</div>
        <hr />
        <br />
        <br />
        <Main />
      </div>
    )
  }
}

export default App
