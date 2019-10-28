import { shallow } from "enzyme";
import React from "react";
import ReactDOM from "react-dom";

import App from "../app";

it("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<App />, div);
});

describe("App", () => {
  test("renders the component correctly", () => {
    expect(shallow(<App />)).toMatchSnapshot();
  });
});
