import React from "react";
import { Redirect } from "react-router-dom";
import { StyledSlideOutPanel } from "../styles/SlideOutPanel";
import { StyledLabel } from "../styles/Typography";
import { Header, FormSectionHeader, RadioButton, TextInput } from "..";

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
            <StyledLabel>Location Name</StyledLabel>
            <TextInput
              name="name"
              value={name}
              type="text"
              onChange={this.handleChange}
            />
            <input
              name="name"
              onChange={this.handleChange}
              type="text"
              value={name}
            />

            <StyledLabel>Type</StyledLabel>
            <br />
            <RadioButton
              label="School"
              name="location_type"
              value="school"
            />
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

            {location_type == "school" ? (
              <div>
                <StyledLabel>Principal Name</StyledLabel>
                <input
                  name="school_principal"
                  onChange={this.handleChange}
                  type="text"
                  value={school_principal}
                />
                <StyledLabel>Principal Email</StyledLabel>
                <input
                  name="principal_email"
                  onChange={this.handleChange}
                  type="text"
                  value={principal_email}
                />
                <StyledLabel>School District</StyledLabel>
                <input
                  name="school_district"
                  onChange={this.handleChange}
                  type="text"
                  value={school_district}
                />
              </div>
            ) : (
              <div>
                <StyledLabel>County District</StyledLabel>
                <input
                  name="county_district"
                  onChange={this.handleChange}
                  type="text"
                  value={county_district}
                />
                <StyledLabel>City District</StyledLabel>
                <input
                  name="city_district"
                  onChange={this.handleChange}
                  type="text"
                  value={city_district}
                />
              </div>
            )}

            <FormSectionHeader name="Address" />

            <StyledLabel>Address 1</StyledLabel>
            <input
              id="address_street"
              name="address_street"
              onChange={this.handleChange}
              type="text"
              value={address_street}
            />
            <StyledLabel>City</StyledLabel>
            <input
              id="address_city"
              name="address_city"
              onChange={this.handleChange}
              type="text"
              value={address_city}
            />
            <StyledLabel>State</StyledLabel>
            <input
              id="address_state"
              name="address_state"
              onChange={this.handleChange}
              type="text"
              value={address_state}
            />
            <StyledLabel>Zip</StyledLabel>
            <input
              id="address_zip"
              name="address_zip"
              onChange={this.handleChange}
              type="text"
              value={address_zip}
            />
            <StyledLabel>Location Phone Number</StyledLabel>
            <input
              id="phone_number"
              name="phone_number"
              onChange={this.handleChange}
              type="text"
              value={phone_number}
            />

            <FormSectionHeader name="Contact" />

            <StyledLabel>First Name</StyledLabel>
            <input
            id="contact_name"
            name="contact_name"
            onChange={this.handleChange}
            type="text"
            value={contact_name}
            />
            <StyledLabel>Phone Number</StyledLabel>
            <input
            id="contact_phone_number"
            name="contact_phone_number"
            onChange={this.handleChange}
            type="text"
            value={contact_phone_number}
            />
            <StyledLabel>Email</StyledLabel>
            <input
            id="contact_email"
            name="contact_email"
            onChange={this.handleChange}
            type="text"
            value={contact_email}
            />
            <StyledLabel>Relationship to Location</StyledLabel>
            <input
            id="contact_relationship"
            name="contact_relationship"
            onChange={this.handleChange}
            type="text"
            value={contact_relationship}
            />

            <StyledLabel>Reference (if any)</StyledLabel>
            <input
              id="reference"
              name="reference"
              onChange={this.handleChange}
              type="text"
              value={reference}
            />

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
