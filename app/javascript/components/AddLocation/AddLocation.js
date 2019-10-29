import React from "react";
import { Redirect } from "react-router-dom";

import { StyledSlideOutPanel } from "../styles/SlideOutPanel";
import { StyledLabel } from "../styles/Typography";

import { Header, FormSectionHeader, RadioButton } from "..";

class AddLocation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        name: "",
        location_type: "school",
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
    };
  }

  handleChange = e => {
    const { form } = this.state;
    const { name, value } = e.target;

    form[name] = value;
    this.setState({ form });
  };

  handleClick = () => {
    const { form } = this.state;

    this.props.handleNewLocation(form);
  };

  render() {
    const {
      name,
      location_type,
      contact_name,
      contact_phone_number,
      contact_email,
      contact_relationship,
      address_street,
      address_city,
      address_state,
      address_zip,
      phone_number,
      reference,
      school_principal,
      principal_email,
      school_district,
      county_district,
      city_district
    } = this.state.form;
    const { success } = this.props;

    console.log(this.state.form);
    return (
      <>
        <Header name="Add a Location" />

        <StyledSlideOutPanel>
          <form>
            <p>Enter Location Name:</p>
            <input
              name="name"
              onChange={this.handleChange}
              type="text"
              value={name}
            />

            <StyledLabel>Select Location Type:</StyledLabel>
            <br />
            <RadioButton label="School" name="location_type" value="school" />
            <RadioButton
              label="Non-School"
              name="location_type"
              value="non-school"
            />
            <RadioButton
              label="Corporate"
              name="location_type"
              value="corporate"
            />

            <p>Enter Contact Name:</p>
            <input
              id="contact_name"
              name="contact_name"
              onChange={this.handleChange}
              type="text"
              value={contact_name}
            />
            <p>Enter Contact Phone Number:</p>
            <input
              id="contact_phone_number"
              name="contact_phone_number"
              onChange={this.handleChange}
              type="text"
              value={contact_phone_number}
            />
            <p>Enter Contact Email:</p>
            <input
              id="contact_email"
              name="contact_email"
              onChange={this.handleChange}
              type="text"
              value={contact_email}
            />
            <p>Enter Contact Relationship to Location:</p>
            <input
              id="contact_relationship"
              name="contact_relationship"
              onChange={this.handleChange}
              type="text"
              value={contact_relationship}
            />

            <FormSectionHeader name="Address" />

            <p>Enter Location Address:</p>
            <input
              id="address_street"
              name="address_street"
              onChange={this.handleChange}
              type="text"
              value={address_street}
            />
            <p>Enter Location City:</p>
            <input
              id="address_city"
              name="address_city"
              onChange={this.handleChange}
              type="text"
              value={address_city}
            />
            <p>Enter Location State:</p>
            <input
              id="address_state"
              name="address_state"
              onChange={this.handleChange}
              type="text"
              value={address_state}
            />
            <p>Enter Location Zipcode:</p>
            <input
              id="address_zip"
              name="address_zip"
              onChange={this.handleChange}
              type="text"
              value={address_zip}
            />
            <p>Enter Location Phone Number:</p>
            <input
              id="phone_number"
              name="phone_number"
              onChange={this.handleChange}
              type="text"
              value={phone_number}
            />
            <p>Enter Reference(if any):</p>
            <input
              id="reference"
              name="reference"
              onChange={this.handleChange}
              type="text"
              value={reference}
            />

            {location_type == "school" ? (
              <div>
                <p>Enter School Principal Name:</p>
                <input
                  name="school_principal"
                  onChange={this.handleChange}
                  type="text"
                  value={school_principal}
                />
                <p>Enter Principal Email:</p>
                <input
                  name="principal_email"
                  onChange={this.handleChange}
                  type="text"
                  value={principal_email}
                />
                <p>Enter School District:</p>
                <input
                  name="school_district"
                  onChange={this.handleChange}
                  type="text"
                  value={school_district}
                />
              </div>
            ) : (
              <div>
                <p>Enter County District:</p>
                <input
                  name="county_district"
                  onChange={this.handleChange}
                  type="text"
                  value={county_district}
                />
                <p>Enter City District:</p>
                <input
                  name="city_district"
                  onChange={this.handleChange}
                  type="text"
                  value={city_district}
                />
              </div>
            )}
            <br />
            <br />
            <button onClick={this.handleClick} type="button">
              Submit
            </button>
            {success && <Redirect to="/" />}
          </form>
        </StyledSlideOutPanel>
      </>
    );
  }
}
export { AddLocation };
