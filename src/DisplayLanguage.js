import React from "react";
import { createContext } from "react";
export const LanguageContext = createContext("en");

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
        <select
          value={this.state.language}
          onChange={this.hundleChangeLanguage}
        >
          <option value="en">EN</option>
          <option value="it">IT</option>
        </select>
      </div>
    );
  }
}
