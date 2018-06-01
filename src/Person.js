import React, {Component} from "react"
import eEmitter from "./EventEmitter"

class Person extends Component {
  state = {
    event1: 0,
    event2: 0,
  }
  subscription = []
  componentDidMount() {
    const x = eEmitter.addListener("event/1", () => {
      this.setState({
        event1: this.state.event1 + 1,
      })
    })

    const y = eEmitter.addListener("event/2", () => {
      this.setState({
        event2: this.state.event2 + 1,
      })
    })
    this.subscription.push(x, y)
  }
  render() {
    return (
      <div>
        <p>{this.state.event1}</p>
        <p>{this.state.event2}</p>
      </div>
    )
  }
  componentWillUnmount() {
    this.subscription &&
      this.subscription.forEach((x) => {
        x.remove()
      })
  }
}

export default Person
