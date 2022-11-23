//Modify the Welcome component so that it receives a second prop called age and renders it below the 'welcome' message, within a p tag after the message "Your age is ".
import React from "react";
import { Age } from "./Age";

export class Welcome extends React.Component {
  render() {
    return (
      <div>
        <p>Hello , {this.props.name} !!</p>
         <Age age={30} />
      </div>
    );
  }
}
Welcome.defaultProps = {
  name: "User",
};
