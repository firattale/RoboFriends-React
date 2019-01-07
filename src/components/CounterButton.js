import React, { Component } from "react";

class CounterButton extends Component {
  state = { count: 0 };

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.count !== nextState.count) {
      return true;
    }
    return false;
  }

  incrementCounter = () => {
    this.setState(state => ({ count: state.count + 1 }));
  };

  render() {
    return (
      <button
        color={this.props.color}
        id="counter"
        onClick={this.incrementCounter}
      >
        Count: {this.state.count}
      </button>
    );
  }
}

export default CounterButton;
