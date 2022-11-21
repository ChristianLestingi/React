//Modify the Hello component so that it shows a p tag below the h1 tag with the message "What a beautiful day!".

import React from "react"
import { Message } from "./Message";

   export class Hello extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, World</h1>
        <Message/>
      </div>
    );
  }
}
