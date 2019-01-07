import { shallow, mount, render } from "enzyme";
import CardList from "./CardList";
import React from "react";
import "../setupTests";

it("should expect to render Card component", () => {
  const mockRobots = [
    { id: 1, name: "John Snow", username: "john", email: "john@gmail.com" }
  ];
  const wrapper = shallow(<CardList robots={mockRobotss} />);

  expect(wrapper).toMatchSnapshot();
});
