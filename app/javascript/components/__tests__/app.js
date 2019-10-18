import { shallow } from "enzyme";
import React from "react";

import App from "../app";

describe("App", () => {
  test("renders the component correctly", () => {
    expect(shallow(<App />)).toMatchSnapshot();
  });
});
