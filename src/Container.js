import React from "react";

export class Container extends React.Component {
  render() {
    const Style = {
      backgroundColor: "white",
      border: "3px solid red",
    };

    return (
      <div>
        <div style={Style} className="Container-title">
          {this.props.title}
          <div>{this.props.children}</div>;
        </div>
      </div>
    );
  }
}
