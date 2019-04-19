import React, { Component } from "react";
import "./App.css";
import Person from "./components/Person/Person";

class App extends Component {
  render() {
    return (
      <div>
        <Person name="John" age="28" />
        <Person name="Max" age="26" />
        <Person name="Jax" age="24" />
        <Person name="Rehn" age="22" />
      </div>
    );
  }
}

export default App;
