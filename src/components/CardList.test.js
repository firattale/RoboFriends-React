import { shallow, mount, render } from "enzyme";
import CardList from "./CardList";
import React from "react";

it("should expect to render Card component", () => {
  const mockRobots = [
    { id: 1, name: "John Snow", username: "john", email: "john@gmail.com" }
  ];
  const wrapper = shallow(<CardList robots={mockRobots} />);

  expect(wrapper).toMatchSnapshot();
});
