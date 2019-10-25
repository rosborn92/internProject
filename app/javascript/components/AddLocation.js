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

    console.log(this.state.form);
    return (
      <>
        <form>
          <h1>Add Location</h1>
          <p>Enter Location Name:</p>
          <input
            name="name"
            onChange={this.handleChange}
            type="text"
            value={name}
          />

          <p>Select Location Type:</p>
          <select
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
            name="contact_name"
            onChange={this.handleChange}
            type="text"
            value={contact_name}
          />
          <p>Enter Contact Phone Number:</p>
          <input
            name="contact_phone_number"
            onChange={this.handleChange}
            type="text"
            value={contact_phone_number}
          />
          <p>Enter Contact Email:</p>
          <input
            name="contact_email"
            onChange={this.handleChange}
            type="text"
            value={contact_email}
          />
          <p>Enter Contact Relationship to Location:</p>
          <input
            name="contact_relationship"
            onChange={this.handleChange}
            type="text"
            value={contact_relationship}
          />
          <p>Enter Location Address:</p>
          <input
            name="address_street"
            onChange={this.handleChange}
            type="text"
            value={address_street}
          />
          <p>Enter Location City:</p>
          <input
            name="address_city"
            onChange={this.handleChange}
            type="text"
            value={address_city}
          />
          <p>Enter Location State:</p>
          <input
            name="address_state"
            onChange={this.handleChange}
            type="text"
            value={address_state}
          />
          <p>Enter Location Zipcode:</p>
          <input
            name="address_zip"
            onChange={this.handleChange}
            type="text"
            value={address_zip}
          />
          <p>Enter Location Phone Number:</p>
          <input
            name="phone_number"
            onChange={this.handleChange}
            type="text"
            value={phone_number}
          />
          <p>Enter Reference(if any):</p>
          <input
            name="reference"
            onChange={this.handleChange}
            type="text"
            value={reference}
          />

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
