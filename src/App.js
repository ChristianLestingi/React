// Write a class component called App that renders the Hello component within a div tag.

import React from "react"
import { Hello } from "./Hello"
import { Jokes } from "./Jokes";

export class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <Jokes jokes='Prova'/>
      </div>
    );
  }
}
