import React, { PureComponent } from "react";

class Header extends PureComponent {
  state = {};
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }
  render() {
    console.log("header");
    return (
      <div>
        <h1 className="f1">ROBOFRIENDS</h1>;
      </div>
    );
  }
}

export default Header;
