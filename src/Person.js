import React, {Component} from "react"
import eEmitter from "./EventEmitter"

class Person extends Component {
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
      <div>
        <p>{this.state.event1}</p>
        <p>{this.state.event2}</p>
      </div>
    )
  }
}

export default Person
