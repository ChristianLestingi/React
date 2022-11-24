import React from "react";
import { CounterDisplay } from "./CounterDisplay";

export class Counter extends React.Component {
  state = {
    count: this.props.initialValue,
  };
  constructor(props) {
    super(props);
    setInterval(() => {
      this.setState((state) => {
        return { count: state.count + this.props.incrementValue };
      });
    }, this.props.incrementTime);
  }
  

  render() {
    return (
      <div>

        <CounterDisplay count={this.state.count} />
      </div>
    );
  }
}
