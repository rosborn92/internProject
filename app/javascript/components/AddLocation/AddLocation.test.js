import Enzyme, { mount, shallow, render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import ReactDOM from "react-dom";

import AddLocation from "components/AddLocation";

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

test("AddLocation tests a all fields of input", () => {
  const app = shallow(<AddLocation />);

  expect(app.find("#name").exists()).toEqual(true);
  expect(app.find("#location_type").exists()).toEqual(true);
  expect(app.find("#contact_name").exists()).toEqual(true);
  expect(app.find("#contact_phone_number").exists()).toEqual(true);
  expect(app.find("#contact_email").exists()).toEqual(true);
  expect(app.find("#contact_relationship").exists()).toEqual(true);
  expect(app.find("#address_street").exists()).toEqual(true);
  expect(app.find("#address_city").exists()).toEqual(true);
  expect(app.find("#address_state").exists()).toEqual(true);
  expect(app.find("#address_zip").exists()).toEqual(true);
  expect(app.find("#phone_number").exists()).toEqual(true);
  expect(app.find("#reference").exists()).toEqual(true);
  expect(app.find("#school_principal").exists()).toEqual(true);
  expect(app.find("#principal_email").exists()).toEqual(true);
  expect(app.find("#school_district").exists()).toEqual(true);
  expect(app.find("#county_district").exists()).toEqual(true);
  expect(app.find("#city_district").exists()).toEqual(true);
  expect(app.find("button").exists()).toEqual(true);
});

describe("Test handlechange component", () => {
  it("Test click event", () => {
    const mockCallBack = jest.fn();

    const app = shallow(<AddLocation handleNewLocation={mockCallBack} />);
    const newName = "juan";

    app
      .find("#name")
      .simulate("change", { target: { name: "name", value: newName } });
    app.find("button").simulate("click");
    expect(mockCallBack.mock.calls[0]).toEqual([
      {
        name: newName,
        location_type: "School",
        contact_name: "",
        contact_phone_number: "",
        contact_email: "",
        contact_relationship: "",
        address_street: "",
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
