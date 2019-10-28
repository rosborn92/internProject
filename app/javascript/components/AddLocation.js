import React from "react";
import { Redirect } from "react-router-dom";

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
    } = this.state.form
    const { success } = this.props
    console.log(this.state.form)
  return(
    <React.Fragment>
      <form>
        <h1>Add Location</h1>
        <p>Enter Location Name:</p>
        <input
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
        />

          <p>Select Location Type:</p>
          <select
            id="location_type"
            name="location_type"
            onChange={this.handleChange}
            value={location_type}
          >
            ><option value="school">School</option>
            <option value="non-school">Non-School</option>
            <option value="corporate">Corporate</option>
          </select>

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
              type="text"
              name="school_principal"
              value={school_principal}
              onChange={this.handleChange}
            />
            <p>Enter Principal Email:</p>
            <input
              type="text"
              name="principal_email"
              value={principal_email}
              onChange={this.handleChange}
            />
            <p>Enter School District:</p>
            <input
              type="text"
              name="school_district"
              value={school_district}
              onChange={this.handleChange}
            />
          </div>
        ):
        (
          <div>
            <p>Enter County District:</p>
            <input
              type="text"
              name="county_district"
              value={county_district}
              onChange={this.handleChange}
            />
            <p>Enter City District:</p>
            <input
              type="text"
              name="city_district"
              value={city_district}
              onChange={this.handleChange}
            />
          </div>
        )}
        <br />
        <br />
        <button type="button" onClick={this.handleClick}>Submit</button>
        {success && <Redirect to="/" /> }
      </form>
    </React.Fragment>
  )
}
}
export default AddLocation;
