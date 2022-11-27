import React from "react";

export class ClickTraker extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  trackerButtonClick = (event) => {
    this.setState((state) => {
      return {
        value: event.target.innerHTML,
      };
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.trackerButtonClick}>
          Button one
        </button>
        <button onClick={this.trackerButtonClick}>
          Button two
        </button>
        <button onClick={this.trackerButtonClick}>
          button three
        </button>
        <h1>{this.state.value} </h1>
      </div>
    );
  }
}
