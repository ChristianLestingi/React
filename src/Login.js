import React from "react";

export class Login extends React.Component {
  state = {
    username: "",
    password: "",
    remember: false,

  };

  controlValueInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const type = event.target.type;
    const checked = event.target.checked;

    this.setState({
      [name]: type === "checkbox" ? checked : value,
    });
  };

  componentDidUpdate() {
    console.log(this.state);
  }

  resetForm = () =>{
    this.setState({
        username : '',
        password: '',
        remember : false
    })

  }

  render() {
    return (
      <div>
        <input
          name="username"
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
        <button onClick={this.resetForm}>
            Login
        </button>
      </div>
    );
  }
}
