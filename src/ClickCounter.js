import React from "react";

export class ClickCounter extends React.Component {
  state = {
    count: 0,
  };
  incrementOnClick = () => {
    this.setState((state) => {
      return {
        count: state.count + 1,
      };
    });
  };

  render() {
    return (
      <div>
        <h1> {this.state.count}</h1>
        <button onClick={this.incrementOnClick}>Add</button>
      </div>
    );
  }
}
