import React, { Component } from "react";
import "./styles.css";
import Student from "./Student";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Leaders Board</h1>
        <Student name="Alex" university="MIT" score={340} />
        <Student name="Dunk" university="Gorgia Tech." score={346} />
        <Student
          name="Lucy"
          university="University of California"
          score={337}
        />
      </div>
    );
  }
}
export default App;
