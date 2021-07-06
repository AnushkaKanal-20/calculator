import React from "react";
import PropTypes from "prop-types";

import "./Display.css";

export default class Display extends React.Component {

  constructor(props) {
    super(props);
    this.state = { windowWidth: window.innerWidth };
  }

 handleResize = (e) => {
  this.setState({ windowWidth: window.innerWidth }); // set state to width of the viewport
 };

 componentDidMount() {
  window.addEventListener("resize", this.handleResize);
 }

 componentWillUnmount() {
  window.addEventListener("resize", this.handleResize);
 } 

  static propTypes = {
    value: PropTypes.string,
  };

 
  render() {
    const { windowWidth } = this.state; 
    const displayBackground = windowWidth < 500 ? "red" : "#858694"; // check if viewport width is less than 500
    return (
      <div className="component-display" style={{backgroundColor: displayBackground}}>
        <div>{this.props.value} </div>
      </div>
    );
  }
}
