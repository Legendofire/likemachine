import React, { Component } from "react";

import "./FloatingButton.css";

export default class FloatingButton extends Component {
  render() {
    return (
      <button
        onClick={this.props.toggleFormAction}
        className={
          this.props.isFormOpen ? "floatingButton open" : "floatingButton close"
        }
      >
        <span>+</span>
      </button>
    );
  }
}
