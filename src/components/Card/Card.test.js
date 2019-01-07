import { shallow, mount, render } from "enzyme";
import Card from "./Card";
import React from "react";

const wrapper = shallow(<Card />);

it("should expect to render Card component", () => {
  expect(wrapper).toMatchSnapshot();
});
