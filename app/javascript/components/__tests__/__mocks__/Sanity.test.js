import Enzyme, { mount, shallow, render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import ReactDOM from "react-dom";

import App from "../../App";

Enzyme.configure({ adapter: new Adapter() });
jest.mock("../../api/");

it("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<App />, div);
});

describe("App", () => {
  test("renders the component correctly", () => {
    expect(shallow(<App />)).toMatchSnapshot();
  });
});
