import React from "react";

export class UncontrolledLogin extends React.Component {
  UncontrolledLogin = (event) => {
    event.preventDefault();

    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;
    const checkbox = event.target.elements.checkbox.checked;
    console.log({ username, password, checkbox });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.UncontrolledLogin}>
          <input name="username"></input>
          <input name="password" type="password"></input>
          <input name="checkbox" type="checkbox"></input>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
