import Enzyme, { mount, shallow, render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import ReactDOM from "react-dom";

import { AddLocation } from "components/AddLocation";

Enzyme.configure({ adapter: new Adapter() });

test("AddLocation form renders without an error", () => {
  const app = shallow(<AddLocation />);

  expect(app.find("form").exists()).toBe(true);
});

test("AddLocation renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<AddLocation />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("AddLocation tests all fields of input", () => {
  const app = shallow(<AddLocation />);

  expect(app.find("#name").exists()).toEqual(true);
  expect(app.find("#school").exists()).toEqual(true);
  expect(app.find("#non-school").exists()).toEqual(true);
  expect(app.find("#corporate").exists()).toEqual(true);
  expect(app.find("#contact_first_name").exists()).toEqual(true);
  expect(app.find("#contact_last_name").exists()).toEqual(true);
  expect(app.find("#contact_phone_number").exists()).toEqual(true);
  expect(app.find("#contact_email").exists()).toEqual(true);
  expect(app.find("#contact_relationship").exists()).toEqual(true);
  expect(app.find("#address_1").exists()).toEqual(true);
  expect(app.find("#address_2").exists()).toEqual(true);
  expect(app.find("#address_city").exists()).toEqual(true);
  expect(app.find("#address_state").exists()).toEqual(true);
  expect(app.find("#address_zip").exists()).toEqual(true);
  expect(app.find("#phone_number").exists()).toEqual(true);
  expect(app.find("#reference").exists()).toEqual(true);
  expect(app.find("#button").exists()).toEqual(true);
});

test("If Type is a school", () => {
  const school = shallow(<AddLocation />);

  school.find("#school").simulate("change", {
    target: { name: "location_type", value: "school" }
  });

  expect(school.find("#school_principal").exists()).toEqual(true);
  expect(school.find("#principal_email").exists()).toEqual(true);
  expect(school.find("#school_district").exists()).toEqual(true);
});

test("If Type is not a school", () => {
  const other = shallow(<AddLocation />);

  other.find("#non-school").simulate("change", {
    target: { name: "location_type", value: "non-school" }
  });

  expect(other.find("#county_district").exists()).toEqual(true);
  expect(other.find("#city_district").exists()).toEqual(true);
});

describe("Test handlechange component", () => {
  it("Test click event", () => {
    const mockCallBack = jest.fn();

    const app = shallow(<AddLocation handleNewLocation={mockCallBack} />);
    const newName = "juan";

    app
      .find("#name")
      .simulate("change", { target: { name: "name", value: newName } });
    app.find("#button").simulate("click");
    expect(mockCallBack.mock.calls[0]).toEqual([
      {
        name: newName,
        location_type: "",
        contact_first_name: "",
        contact_last_name: "",
        contact_phone_number: "",
        contact_email: "",
        contact_relationship: "",
        address_1: "",
        address_2: "",
        address_city: "",
        address_state: "",
        address_zip: "",
        phone_number: "",
        reference: "",
        school_principal: "",
        principal_email: "",
        school_district: "",
        county_district: "",
        city_district: ""
      }
    ]);
  });
});
