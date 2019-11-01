import { textInputs } from "polished";
import React from "react";
import { Redirect } from "react-router-dom";

import { States } from "../../utils/States";
import { StyledFormLayout } from "../styles/Forms";
import { StyledSlideOutPanel } from "../styles/SlideOutPanel";
import { StyledLabel } from "../styles/Typography";

import {
  Header,
  FormSectionHeader,
  StyledSelect,
  FullInput,
  RadioButton,
  SubmitButton,
  HalfInput,
  ThirdInput
} from "..";

class AddLocation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        name: "",
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
      contact_first_name,
      contact_last_name,
      contact_phone_number,
      contact_email,
      contact_relationship,
      address_1,
      address_2,
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
            <StyledFormLayout>
              <div className="full">
                <StyledLabel>Location Name</StyledLabel>
                <FullInput
                  id="name"
                  name="name"
                  onChange={this.handleChange}
                  type="text"
                  value={name}
                />
              </div>
              <div className="half">
                <StyledLabel>Type</StyledLabel>
                <RadioButton
                  id="school"
                  label="School"
                  name="location_type"
                  onChange={this.handleChange}
                  type="radio"
                  value="school"
                />
                <RadioButton
                  id="non-school"
                  label="Non-School"
                  name="location_type"
                  onChange={this.handleChange}
                  type="radio"
                  value="non-school"
                />
                <RadioButton
                  id="corporate"
                  label="Corporate"
                  name="location_type"
                  onChange={this.handleChange}
                  type="radio"
                  value="corporate"
                />
              </div>

              <div className="half">
                <StyledLabel>Location Phone Number</StyledLabel>
                <HalfInput
                  id="phone_number"
                  name="phone_number"
                  onChange={this.handleChange}
                  type="text"
                  value={phone_number}
                />
              </div>

              {location_type == "school" ? (
                <>
                  <div className="third">
                    <StyledLabel>Principal Name</StyledLabel>
                    <ThirdInput
                      id="school_principal"
                      name="school_principal"
                      onChange={this.handleChange}
                      type="text"
                      value={school_principal}
                    />
                  </div>
                  <div className="third">
                    <StyledLabel>Principal Email</StyledLabel>
                    <ThirdInput
                      id="principal_email"
                      name="principal_email"
                      onChange={this.handleChange}
                      type="text"
                      value={principal_email}
                    />
                  </div>
                  <div className="third">
                    <StyledLabel>School District</StyledLabel>
                    <ThirdInput
                      id="school_district"
                      name="school_district"
                      onChange={this.handleChange}
                      type="text"
                      value={school_district}
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="half">
                    <StyledLabel>County District</StyledLabel>
                    <HalfInput
                      id="county_district"
                      name="county_district"
                      onChange={this.handleChange}
                      type="text"
                      value={county_district}
                    />
                  </div>
                  <div className="half">
                    <StyledLabel>City District</StyledLabel>
                    <HalfInput
                      id="city_district"
                      name="city_district"
                      onChange={this.handleChange}
                      type="text"
                      value={city_district}
                    />
                  </div>
                </>
              )}
            </StyledFormLayout>
            <FormSectionHeader name="Address" />
            <StyledFormLayout>
              <div className="half">
                <StyledLabel>Address 1</StyledLabel>
                <HalfInput
                  id="address_1"
                  name="address_1"
                  onChange={this.handleChange}
                  type="text"
                  value={address_1}
                />
              </div>
              <div className="half">
                <StyledLabel>Address 2</StyledLabel>
                <HalfInput
                  id="address_2"
                  name="address_2"
                  onChange={this.handleChange}
                  type="text"
                  value={address_2}
                />
              </div>
              <div className="third">
                <StyledLabel>City</StyledLabel>
                <ThirdInput
                  id="address_city"
                  name="address_city"
                  onChange={this.handleChange}
                  type="text"
                  value={address_city}
                />
              </div>
              <div className="third">
                <StyledLabel>State</StyledLabel>
                <StyledSelect
                  id="address_state"
                  name="address_state"
                  onChange={this.handleChange}
                  value={address_state}
                >
                  {States.map((option, id) => (
                    <option key={id} value={option.abbreviation}>
                      {option.state}
                    </option>
                  ))}
                </StyledSelect>
              </div>
              <div className="third">
                <StyledLabel>Zip</StyledLabel>
                <ThirdInput
                  id="address_zip"
                  name="address_zip"
                  onChange={this.handleChange}
                  type="text"
                  value={address_zip}
                />
              </div>
            </StyledFormLayout>
            <FormSectionHeader name="Contact" />
            <StyledFormLayout>
              <div className="half">
                <StyledLabel>First Name</StyledLabel>
                <HalfInput
                  id="contact_first_name"
                  name="contact_first_name"
                  onChange={this.handleChange}
                  type="text"
                  value={contact_first_name}
                />
              </div>
              <div className="half">
                <StyledLabel>Last Name</StyledLabel>
                <HalfInput
                  id="contact_last_name"
                  name="contact_last_name"
                  onChange={this.handleChange}
                  type="text"
                  value={contact_last_name}
                />
              </div>
              <div className="half">
                <StyledLabel>Phone Number</StyledLabel>
                <HalfInput
                  id="contact_phone_number"
                  name="contact_phone_number"
                  onChange={this.handleChange}
                  type="text"
                  value={contact_phone_number}
                />
              </div>
              <div className="half">
                <StyledLabel>Email</StyledLabel>
                <HalfInput
                  id="contact_email"
                  name="contact_email"
                  onChange={this.handleChange}
                  type="text"
                  value={contact_email}
                />
              </div>
              <div className="half">
                <StyledLabel>Relationship to Location</StyledLabel>
                <HalfInput
                  id="contact_relationship"
                  name="contact_relationship"
                  onChange={this.handleChange}
                  type="text"
                  value={contact_relationship}
                />
              </div>
              <div className="half">
                <StyledLabel>Reference (if any)</StyledLabel>
                <HalfInput
                  id="reference"
                  name="reference"
                  onChange={this.handleChange}
                  type="text"
                  value={reference}
                />
              </div>
            </StyledFormLayout>
            <br />
            <br />
            <SubmitButton id="button" onClick={this.handleClick} type="button">
              Submit
            </SubmitButton>
            {success && <Redirect to="/" />}
          </form>
        </StyledSlideOutPanel>
      </>
    );
  }
}
export { AddLocation };
