import React, {Component} from "react"
import eEmitter from "./EventEmitter"

class Header extends Component {
  state = {}
  emit1 = () => {
    eEmitter.emit("event/1")
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
}

export default Header
