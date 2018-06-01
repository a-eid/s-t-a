import React from "react"

export default (classes, Cmp) => {
  return (props) => (
    <div className={classes.join(" ")}>
      <Cmp {...props} />
    </div>
  )
}
