import React, { Component } from "react";
import "./App.css";

import { subscirbeToTimer } from "./api";

class App extends Component {
  constructor(props) {
    super(props);

    subscirbeToTimer(timestamp => {
      this.setState({ timestamp });
    });
  }

  state = {
    timestamp: "on timestamp yet"
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Our awesome drawing app</h2>
        </div>
        This is the value of the timer timestamp: {this.state.timestamp}
      </div>
    );
  }
}

export default App;
