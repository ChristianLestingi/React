import React from "react";

export class Container extends React.Component {
  render() {
    const Style = {
      backgroundColor: "white",
      border: "3px solid red",
    };

    return <div style={Style}>{this.props.children}</div>;
  }
}
