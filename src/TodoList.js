import React from "react";
state = {
  value: "",
};
addItemArray = (event) => {
  const value = event.target.value;
  this.setState({
    value: value,
  });

  console.log(value);
};

export class TodoList extends React.Component {
  render() {
    const items = this.props.items.map((item) => <li>{item}</li>);
    return (
      <div>
        <ul>{items} </ul>
        <input name="input" type="text"{this.state.value}onChange={this.addItemArray}></input>
        <button onClick={this.addItemArray} name="button" type="button">
          {" "}
          Add
        </button>
      </div>
    );
  }
}
