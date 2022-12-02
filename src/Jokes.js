import React from "react";

export class Jokes extends React.Component {
  constructor(props) {
    super(props);
    this.state = { jokes: this.props.jokes };
  }

  render() {
    return (
      <div>
        <p> {this.state.jokes}</p>
      </div>
    );
  }
}
