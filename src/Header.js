import React, {Component} from "react"
import eEmitter from "./EventEmitter"

class Header extends Component {
  state = {}
  subscription = []
  emit1 = () => {
    eEmitter.emit("event/1")
    this.subscription.push(eEmitter.addListener("xx"))
  }

  emit2 = () => {
    eEmitter.emit("event/2")
  }
  render() {
    return (
      <div className="header">
        <button onClick={this.emit1}> event 1</button>
        <button onClick={this.emit2}> event 2</button>
      </div>
    )
  }
  componentDidUpdate(prevProps, prevState) {
    this.subscription && this.subscription.forEach((x) => x.remove())
  }
}

export default Header
