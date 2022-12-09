import React, { useEffect, useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

export function Counter(initialValue) {
  const [count, setCount] = useState((initialValue = 1));

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(() => count + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [count]);

  return (
    <div>
      <CounterDisplay count={count} />
    </div>
  );
}
// state = {
//   count: this.props.initialValue,
// };

// componentDidMount(){
//  this.Interval = setInterval(() => {
//     this.setState((state) => {
//       return { count: state.count + this.props.incrementValue };
//     });
//   }, this.props.incrementTime);

// }
// componentWillUnmount(){
//   clearInterval(this.Interval)
// }

// render() {
// }
