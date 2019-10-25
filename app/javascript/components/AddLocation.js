import React from "react";
import { Redirect } from "react-router-dom"

class AddLocation extends React.Component{
  constructor(props) {
    super(props)
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
        school_principal: "",
        principal_email: "",
        school_district: "",
        county_district: "",
        city_district: ""
      }
    }
  }

  handleChange = (e) => {
    const { form } = this.state
    const { name, value } = e.target
    form[name] = value
    this.setState({ form })
  }

  handleClick = () => {
    const{ form } = this.state
    this.props.handleNewLocation(form)
  }

  render() {
    const{
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
    } = this.state
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
            name="location_type"
            value={location_type}
            onChange={this.handleChange}>
              <option value="school">School</option>
              <option value="non-school">Non-School</option>
              <option value="corporate">Corporate</option>
          </select>

        <p>Enter Contact Name:</p>
        <input
        type="text"
        name="contact_name"
        value={contact_name}
        onChange={this.handleChange}
        />
        <p>Enter Contact Phone Number:</p>
        <input
          type="text"
          name="contact_phone_number"
          value={contact_phone_number}
          onChange={this.handleChange}
        />
        <p>Enter Contact Email:</p>
        <input
          type="text"
          name="contact_email"
          value={contact_email}
          onChange={this.handleChange}
        />
        <p>Enter Contact Relationship to Location:</p>
        <input
          type="text"
          name="contact_relationship"
          value={contact_relationship}
          onChange={this.handleChange}
        />
        <p>Enter Location Address:</p>
        <input
          type="text"
          name="address_street"
          value={address_street}
          onChange={this.handleChange}
        />
        <p>Enter Location City:</p>
        <input
          type="text"
          name="address_city"
          value={address_city}
          onChange={this.handleChange}
        />
        <p>Enter Location State:</p>
        <input
          type="text"
          name="address_state"
          value={address_state}
          onChange={this.handleChange}
        />
        <p>Enter Location Zipcode:</p>
        <input
          type="text"
          name="address_zip"
          value={address_zip}
          onChange={this.handleChange}
        />
        <p>Enter Location Phone Number:</p>
        <input
          type="text"
          name="phone_number"
          value={phone_number}
          onChange={this.handleChange}
        />
        <p>Enter Reference(if any):</p>
        <input
          type="text"
          name="reference"
          value={reference}
          onChange={this.handleChange}
        />

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
        {"\n"}
        <button type="button" onClick={this.handleClick}>Submit</button>
        {success && <Redirect to="/" /> }
      </form>
    </React.Fragment>
  )
}
}
export default AddLocation;
