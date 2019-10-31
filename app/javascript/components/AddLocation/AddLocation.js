import React from "react";
import { Redirect } from "react-router-dom";
import { StyledSlideOutPanel } from "../styles/SlideOutPanel";
import { StyledLabel } from "../styles/Typography";
import { Header, FormSectionHeader, LocationStyledInput, RadioButton, SubmitButton, TextInput, Thirds } from "..";
import { textInputs } from "polished";

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
      contact_first_name,
      contact_last_name,
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
            <LocationStyledInput
              name="name"
              id="name"
              value={name}
              type="text"
              onChange={this.handleChange}
            />

         <tr>
           <td>
            <StyledLabel>Type</StyledLabel>
            <br />
            <RadioButton
              label="School"
              id="School"
              name="location_type"
              value="school"
              type="radio"
              onChange={this.handleChange}
            />
            <RadioButton
              label="Non-School"
              id="non-school"
              name="location_type"
              value="non-school"
              type="radio"
              onChange={this.handleChange}
            />
            <RadioButton
              label="Corporate"
              id="corporate"
              name="location_type"
              value="corporate"
              type="radio"
              onChange={this.handleChange}
            />
           </td>
          <td style= {{ paddingLeft:'50px'}}>
          <StyledLabel>Location Phone Number</StyledLabel>
            <TextInput
              id="phone_number"
              name="phone_number"
              onChange={this.handleChange}
              type="text"
              value={phone_number}
            />
           </td>
          </tr>  
            {location_type == "school" ? (
           <tr>
            <td>
                <StyledLabel>Principal Name</StyledLabel>
                <Thirds
                  name="school_principal"
                  id="school_principal"
                  onChange={this.handleChange}
                  type="text"
                  value={school_principal}
                />
              </td>
              <td>
                <StyledLabel>Principal Email</StyledLabel>
                <Thirds
                  name="principal_email"
                  id="principal_email"
                  onChange={this.handleChange}
                  type="text"
                  value={principal_email}
                />
<<<<<<< Updated upstream
              </td>
              <td>
=======
               </td>
               <td>
>>>>>>> Stashed changes
                <StyledLabel>School District</StyledLabel>
                <Thirds
                  name="school_district"
                  id="school_district"
                  onChange={this.handleChange}
                  type="text"
                  value={school_district}
                />
<<<<<<< Updated upstream

              </td>
             </tr>
=======
               </td>
              </tr>
>>>>>>> Stashed changes
            ) : (
              <tr>
               <td>
                <StyledLabel>County District</StyledLabel>
                <TextInput
                  name="county_district"
                  id="county_district"
                  onChange={this.handleChange}
                  type="text"
                  value={county_district}
                />
               </td>
               <td>
                <StyledLabel>City District</StyledLabel>
                <TextInput
                  name="city_district"
                  id="city_district"
                  onChange={this.handleChange}
                  type="text"
                  value={city_district}
                />
                </td>
              </tr>
            )}

            <FormSectionHeader name="Address" />

            <StyledLabel>Address 1</StyledLabel>
            <TextInput
              id="address_street"
              name="address_street"
              onChange={this.handleChange}
              type="text"
              value={address_street}
            />
<<<<<<< Updated upstream
        <tr>
          <td>
=======
          <tr>
           <td>
>>>>>>> Stashed changes
            <StyledLabel>City</StyledLabel>
            <Thirds
              id="address_city"
              name="address_city"
              onChange={this.handleChange}
              type="text"
              value={address_city}
            />
          </td>
          <td style={{paddingLeft:"50px"}}>
            <StyledLabel>State</StyledLabel>
            <Thirds
              id="address_state"
              name="address_state"
              onChange={this.handleChange}
              type="text"
              value={address_state}
            />
          </td>
          <td style={{paddingLeft:"50px"}}>
            <StyledLabel>Zip</StyledLabel>
            <Thirds
              id="address_zip"
              name="address_zip"
              onChange={this.handleChange}
              type="text"
              value={address_zip}
            />
<<<<<<< Updated upstream
          </td>
        </tr>
=======
           </td>
          </tr>

>>>>>>> Stashed changes

            <FormSectionHeader name="Contact" />
          <tr>
            <td>
            <StyledLabel>First Name</StyledLabel>
            <TextInput
            id="contact_first_name"
            name="contact_first_name"
            onChange={this.handleChange}
            type="text"
            value={contact_first_name}
            />
            <StyledLabel>Phone Number</StyledLabel>
            <TextInput
            id="contact_phone_number"
            name="contact_phone_number"
            onChange={this.handleChange}
            type="text"
            value={contact_phone_number}
            />
            <StyledLabel>Relationship to Location</StyledLabel>
            <TextInput
            id="contact_relationship"
            name="contact_relationship"
            onChange={this.handleChange}
            type="text"
            value={contact_relationship}
            />
          </td>
          <td style= {{ paddingLeft:'50px'}}>
            <StyledLabel>Last Name</StyledLabel>
            <TextInput
            id="contact_last_name"
            name="contact_last_name"
            onChange={this.handleChange}
            type="text"
            value={contact_last_name}
            />

            <StyledLabel>Email</StyledLabel>
            <TextInput
            id="contact_email"
            name="contact_email"
            onChange={this.handleChange}
            type="text"
            value={contact_email}
            />
<<<<<<< Updated upstream

=======

>>>>>>> Stashed changes

            <StyledLabel>Reference (if any)</StyledLabel>
            <TextInput
              id="reference"
              name="reference"
              onChange={this.handleChange}
              type="text"
              value={reference}
            />
          </td>
          </tr>
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
