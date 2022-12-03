import React from "react";

export class TodoList extends React.Component {
  state = {
    value: "",
    items: ["milk", "bread", "pasta"],
  };
  takeValue = (event) => {
    const value = event.target.value;
    this.setState({
      value: value,
    });
    console.log(value);
  };
  addItemArray = (event) => {
    this.state.items.push(this.state.value);

    this.setState({
      value: this.state.value,
    });
  };
  resetItemsArray = (event) => {
    this.setState({
      items: [],
    });
  };
  resetItemArray = (index) => {
    this.setState({
      items: this.state.items.filter((item, i) => i !== index),
    });
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.items.map((item, i) => (
            <li key={i}>
              {item}
              <button onClick={() => this.resetItemArray(i)}> Remove </button>
            </li>
          ))}
        </ul>

        <input
          name="input"
          type="text"
          value={this.state.value}
          onChange={this.takeValue}
        ></input>
        <button name="button" type="button" onClick={this.addItemArray}>
          Add
        </button>
        <button name="reset" type="button" onClick={this.resetItemsArray}>
          reset
        </button>
      </div>
    );
  }
}
