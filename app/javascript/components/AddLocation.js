import React from "react";
import { Redirect } from "react-router-dom";

class AddLocation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        name: "",
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
    } = this.state;
    const { success } = this.props;

    return (
      <>
        <form>
          <h1>Add Location</h1>
          <p>Enter Location Name:</p>
          <input
            id="name"
            name="name"
            onChange={this.handleChange}
            type="text"
            value={name}
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

          <p>Enter School Principal Name:</p>
          <input
            id="school_principal"
            name="school_principal"
            onChange={this.handleChange}
            type="text"
            value={school_principal}
          />
          <p>Enter Principal Email:</p>
          <input
            id="principal_email"
            name="principal_email"
            onChange={this.handleChange}
            type="text"
            value={principal_email}
          />
          <p>Enter School District:</p>
          <input
            id="school_district"
            name="school_district"
            onChange={this.handleChange}
            type="text"
            value={school_district}
          />
          <p>Enter County District:</p>
          <input
            id="county_district"
            name="county_district"
            onChange={this.handleChange}
            type="text"
            value={county_district}
          />
          <p>Enter City District:</p>
          <input
            id="city_district"
            name="city_district"
            onChange={this.handleChange}
            type="text"
            value={city_district}
          />
          {"\n"}
          <button onClick={this.handleClick} type="button">
            Submit
          </button>
          {success && <Redirect to="/" />}
        </form>
      </>
    );
  }
}
export default AddLocation;
