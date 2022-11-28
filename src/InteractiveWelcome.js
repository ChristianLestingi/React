import React from "react";
import { Welcome } from "./Welcome";

export class InteractiveWelcome extends React.Component {
  state = {
    username: "",
  };

  usernameInputChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <input name="username" onChange={this.usernameInputChange}></input>
        <Welcome name={this.state.username} />
      </div>
    );
  }
}
