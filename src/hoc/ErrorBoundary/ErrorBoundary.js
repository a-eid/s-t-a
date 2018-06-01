import React, {Component} from "react"
const ErrorMessage = () => (
  <div>
    <span>Error Occured</span>
  </div>
)

export class ErrorBoundary {
  state = {
    hasError: false,
  }

  componentDidCatch = (error, info) => {
    this.state({
      hasError: true,
    })
  }

  render() {
    return this.state.hasError ? <ErrorMessage /> : this.props.children
  }
}

export default ErrorBoundary
