import React, {Component} from "react"
import {BrowserRouter, Route} from "react-router-dom"
import Aux from "./hoc/Aux/Aux"
import Home from "./Home/Home"
import classes from "./App.css"

class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <BrowserRouter>
        <Aux>
          <p className={classes.App}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iste dolorum inventore eius, rem, magni dolore
            fugit, nulla consequatur exercitationem repudiandae vitae libero corrupti totam. Error ducimus modi
            molestias tenetur?j
          </p>
          <Route path="/" component={Home} />
        </Aux>
      </BrowserRouter>
    )
  }
}

export default App
