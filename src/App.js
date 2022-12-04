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

export class App extends React.Component {
  render() {
    return (
      <div>
        <Container title=" My application">
          <Hello />

          <Welcome name="John" />
          <Counter initialValue={10} incrementValue={1} incrementTime={3000} />
          <ClickCounter />
          <ClickTraker />
          <InteractiveWelcome />
          <Login />
          <UncontrolledLogin />
          <TodoList />
        </Container>
      </div>
    );
  }
}
