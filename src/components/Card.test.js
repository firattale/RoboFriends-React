import { shallow, mount, render } from "enzyme";
import Card from "./Card";
import React from "react";
import "../setupTests";

const wrapper = shallow(<Card />);

it("should expect to render Card component", () => {
  expect(wrapper).toMatchSnapshot();
});
