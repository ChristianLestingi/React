import React from "react";
import { CounterDisplay } from "./CounterDisplay";

export class Counter extends React.Component {
  state = {
    count: this.props.initialValue,
  };

  componentDidMount(){
   this.Interval = setInterval(() => {
      this.setState((state) => {
        return { count: state.count + this.props.incrementValue };
      });
    }, this.props.incrementTime);

  }
  componentWillUnmount(){
    clearInterval(this.Interval)
  }


  render() {
    return (
      <div>

        <CounterDisplay count={this.state.count} />
      </div>
    );
  }
}
