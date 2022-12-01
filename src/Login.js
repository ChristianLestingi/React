import React from "react";

export class Login extends React.Component {
  state = {
    username: "",
    password: "",
    remember: false,
    buttonState: true,
  };

  controlValueInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const type = event.target.type;
    const checked = event.target.checked;
    const disabled = event.target.disabled;

    this.setState({
      [name]: type === "checkbox" ? checked : value,
      [name]: type === "button" ? disabled : value,
      buttonState:
        this.state.password === ""
          ? true
          : false || this.state.username === ""
          ? true
          : false,
    });
  };

  onLogin = (event) => {
    this.setState({
      username: this.state.username,
      password: this.state.password,
      remember: this.state.remember,
    });
  };

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    return (
      <form>
        <input
          name="username"
          type="username"
          value={this.state.username}
          onChange={this.controlValueInput}
        ></input>
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.controlValueInput}
        ></input>
        <input
          type="checkbox"
          name="remember"
          checked={this.state.remember}
          onChange={this.controlValueInput}
        ></input>
        <button
          name="button"
          type="button"
          disabled={this.state.buttonState}
          onChange={this.controlValueInput}
          onClick={this.onLogin}
        >
          Login
        </button>
      </form>
    );
  }
}
