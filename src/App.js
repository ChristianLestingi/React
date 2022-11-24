import React from "react";
import { Counter } from "./Counter";
import { Hello } from "./Hello";
import { Welcome } from "./Welcome";

export class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome name="John" />
        <Counter initialValue={10}
                 incrementValue={1}
                 incrementTime={3000} />
      </div>
    );
  }
}
