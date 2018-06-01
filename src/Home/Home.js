import React, {Component} from "react"
import Header from "../Header"
import Main from "../Main"
import Aux from "../hoc/Aux/Aux"
import withClass from "../hoc/withClass"

import eEmitter from "../EventEmitter"
import classes from "./Home.css"

class App extends Component {
  state = {
    event1: 0,
    event2: 0,
  }

  subscription = []
  componentDidMount() {
    this.input.value = "hello there"
    this.input.focus()
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
      <Aux>
        <Header />
        <div>{this.state.event1}</div>
        <div>{this.state.event2}</div>
        <div className={classes.red}>hi</div>
        <input type="text" ref={i => this.input = i}/>
        <div className={classes.green}>hi</div>
        <div className={classes.yellow}>hi</div>
        <br />
        <Main />
      </Aux>
    )
  }
  componentWillUnmount() {
    this.subscription && this.subscription.forEach((x) => x.remove())
  }
}

export default withClass([classes.App], App)
