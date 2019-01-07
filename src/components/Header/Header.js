import React, { PureComponent } from "react";
import CounterButton from "../CounterButton/CounterButton";
class Header extends PureComponent {
  state = {};

  render() {
    console.log("header");
    return (
      <div>
        <h1 className="f1">ROBOFRIENDS</h1>
        <CounterButton />
      </div>
    );
  }
}

export default Header;
