import React from "react";



export class DisplayLanguage extends React.Component {
  state = {
    language: "en",
  };

  hundleChangeLanguage = (event) => {
    this.setState({
      language: event.target.value,
    });
    console.log(this.state.language);
  };
  render() {
    return (
      <div>
     
      </div>
    );
  }
}
