import { shallow, mount, render } from "enzyme";
import CounterButton from "./CounterButton";
import React from "react";

const mockColor = "red";
const wrapper = shallow(<CounterButton color={mockColor} />);

it("should expect to render Card component", () => {
  expect(wrapper).toMatchSnapshot();
});

it("should correctly increments the counter", () => {
  const button = wrapper.find(`[id="counter"]`);
  button.simulate("click");
  expect(wrapper.state()).toEqual({ count: 1 });
  button.simulate("click");
  expect(wrapper.state()).toEqual({ count: 2 });
});
