import React, { Component } from "react";
import Header from "../../components/header";
import Clock from "../clock";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Clock />
      </React.Fragment>
    );
  }
}

export default App;
