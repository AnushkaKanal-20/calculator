import React from "react";
import PropTypes from "prop-types";

import "./Display.css";

export default class Display extends React.Component {
  static propTypes = {
    value: PropTypes.string,
    expr: PropTypes.string,
  };

  render() {
    return (
      this.props.expr ? 
     ( <div className="component-display">
        <div > {this.props.expr}</div>
      </div> ) : 
      ( <div className="component-display">
      <div>{this.props.value}</div>
    </div> )
    );
  }
}
