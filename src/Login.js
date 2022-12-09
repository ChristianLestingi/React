import React, { useEffect, useState } from "react";
import { LanguageContext } from "./DisplayLanguage";

export function Login() {
  const [current, setCurrent] = useState({
    username: "",
    password: "",
    check: false,
  });



  function controlValueInput(event) {
    const { name, type, checked, value } = event.target;
    setCurrent((current) => {
      return { ...current, [name]: type === "checkbox" ? checked : value };
    });
    console.log(current);
  }

  return (
    <form>
      <input name="username" onChange={controlValueInput}></input>
      <input
        name="password"
        type="password"
        onChange={controlValueInput}
      ></input>
      <input
        name="ceck"
        type="checkbox"
        value="checked"
        onChange={controlValueInput}
      ></input>
    </form>
  );
}

// export class Login extends React.Component {
//   state = {
//     username: "",
//     password: "",
//     remember: false,
//     buttonState: true,
//   };

//   controlValueInput = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     const type = event.target.type;
//     const checked = event.target.checked;
//     const disabled = event.target.disabled;

//     this.setState({
//       [name]: type === "checkbox" ? checked : value,
//       [name]: type === "button" ? disabled : value,
//       buttonState:
//         this.state.password === ""
//           ? true
//           : false || this.state.username === ""
//           ? true
//           : false,
//     });
//   };

//   onLogin = (event) => {
//     this.setState({
//       username: this.state.username,
//       password: this.state.password,
//       remember: this.state.remember,
//     });
//   };
//   resetForm = (event) => {
//     this.setState({
//       username: "",
//       password: "",
//       remember: false,
//     });
//   };

//   componentDidUpdate() {
//     console.log(this.state);
//   }

//   render() {
//     const ButtonStyle = {
//       color: "black",
//       backgroundColor: this.state.password.length < 8 ? "red" : "green",
//     };

//     return (
//       <form>
//         <input
//           name="username"
//           type="username"
//           value={this.state.username}
//           onChange={this.controlValueInput}
//         ></input>
//         <input
//           type="password"
//           name="password"
//           value={this.state.password}
//           onChange={this.controlValueInput}
//         ></input>
//         <input
//           type="checkbox"
//           name="remember"
//           checked={this.state.remember}
//           onChange={this.controlValueInput}
//         ></input>
//         <button
//           name="button"
//           type="button"
//           disabled={this.state.buttonState}
//           onChange={this.controlValueInput}
//           onClick={this.onLogin}
//           style={ButtonStyle}
//         >
//           Login
//         </button>
//         <button name="reset" onClick={this.resetForm}>
//           {" "}
//           Reset Form
//         </button>
//       </form>
//     );
//   }
// }
