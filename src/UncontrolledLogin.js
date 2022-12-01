import React, { createRef } from "react";

export class UncontrolledLogin extends React.Component {
    formRef= createRef()
  UncontrolledLogin = (event) => {
    event.preventDefault();

    const username = this.formRef.current.elements.username.value;
    const password = this.formRef.current.elements.password.value;
    const checkbox = this.formRef.current.checkbox.value;
    console.log({ username, password, checkbox });
  };



  render() {
    return (
      <div>
        <form ref={this.formRef}  onSubmit={this.UncontrolledLogin}>
          <input name="username"ref={this.formRef}onChange={this.UncontrolledLogin}></input>
          <input name="password" ref={this.formRef}type="password"onChange={this.UncontrolledLogin}></input>
          <input name="checkbox" ref={this.formRef}type="checkbox"onChange={this.UncontrolledLogin}></input>
          <button>Submit</button>


        </form>
      </div>
    );
  }
}

