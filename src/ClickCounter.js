import React, { useState } from "react";
import { useEffect } from "react";

export function ClickCounter(initialValue) {
  const [current, setCurrent]= useState(initialValue = 10)

  useEffect(() => {
    return onCounterChange
  },
  [current]);

   function onCounterChange(){
    console.log(current)

  }



  function incrementOnclick() {
    setCurrent(current + 2)

  }
  return (
    <div>
      <h1>{current}</h1>
      <button onClick={incrementOnclick}> Add</button>
    </div>
  );
}

// export class ClickCounter extends React.Component {
//   state = {
//     count: 0,
//   };
//   incrementOnClick = () => {
//     this.setState((state) => {
//       return {
//         count: state.count + 1,
//       };
//     });
//   };

//   render() {
//     return (
//       <div>
//         <h1> {this.state.count}</h1>

//         <button onClick={this.incrementOnClick}>Add</button>
//       </div>
//     );
//   }
// }
