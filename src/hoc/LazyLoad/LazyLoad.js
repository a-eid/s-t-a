import React, {Component} from "react"

const LazyLoad = (Cmp) =>
  class extends Component {
    state = {
      C: null,
    }
    componentDidMount() {
      Cmp().then(({default: C}) => {
        this.state({
          C,
        })
      })
    }

    render() {
      const C = this.state.C
      return C ? <C {...this.props} /> : null
    }
  }

export default LazyLoad
