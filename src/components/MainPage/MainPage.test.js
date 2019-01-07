import { shallow, mount, render } from "enzyme";
import App from "../../containers/App";
import React from "react";

it("should expect to render App component", () => {
  const mockStore = {
    robots: [],
    searchField: ""
  };
  const wrapper = shallow(<App store={mockStore} />);
});
