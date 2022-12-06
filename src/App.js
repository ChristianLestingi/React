import React from "react";
import { Counter } from "./Counter";
import { Hello } from "./Hello";
import { Welcome } from "./Welcome";
import { ClickCounter } from "./ClickCounter";
import { ClickTraker } from "./ClickTracker";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";
import { UncontrolledLogin } from "./UncontrolledLogin";
import { TodoList } from "./TodoList";
import { Container } from "./Container";
import { LanguageContext } from "./DisplayLanguage";

export class App extends React.Component {
  state = {
    language: "english",
  };
  handleSelectLanguage = (event) => {
    this.setState({
      language: event.target.value,
    });
  };
  render() {
    return (
      <div>
        <Container title=" My application">
          <LanguageContext.Provider value={this.state.language}>
            <Hello />

            <Welcome name="John" />
            <Counter
              initialValue={10}
              incrementValue={1}
              incrementTime={3000}
            />
            <select value={this.state.language} onChange={this.handleSelectLanguage}>
              <option value="english">ENGLISH</option>
              <option value="italian">ITALIAN</option>
            </select>

            <ClickCounter />
            <ClickTraker />
            <InteractiveWelcome />

            <Login />
            <UncontrolledLogin />

            <TodoList
              render={({ items, reset }) => {
                return (
                  <ul>
                    {items.map((item, i) => (
                      <li key={i}>
                        {item}
                        <button onClick={() => reset(i)}>Remove</button>
                      </li>
                    ))}
                  </ul>
                );
              }}
            ></TodoList>
          </LanguageContext.Provider>
        </Container>
      </div>
    );
  }
}
