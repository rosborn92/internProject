import { shallow } from "enzyme";
import React from "react";
import ReactDOM from "react-dom";
import Enzyme from "enzyme"
import Adapter from 'enzyme-adapter-react-16'

<<<<<<< HEAD
import { App } from "../app";
=======
import { App } from "./App";

Enzyme.configure({ adapter: new Adapter() });
jest.mock("../api/");
>>>>>>> 5574cefe17b005d8521a492a52597c6b056b121a

it("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<App />, div);
});

describe("App", () => {
  test("renders the component correctly", () => {
    expect(shallow(<App />)).toMatchSnapshot();
  });
});
