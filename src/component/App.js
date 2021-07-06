import React from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import calculate from "../logic/calculate";
import "./App.css";

export default class App extends React.Component {
  state = {
    total: "",
    next: "",
    operation: "",
  };

  handleClick = buttonName => {
    this.setState(calculate(this.state, buttonName));
  };

  render() {
    return (
      <div className="component-app">
        <Display value={this.state.next || this.state.total || "0"}
        expr={
          (this.state.total ? this.state.total : "") + (this.state.operation ? this.state.operation : "") +
          (this.state.next ? this.state.next : "")
        } />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}
