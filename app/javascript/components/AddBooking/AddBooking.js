/* eslint-disable camelcase */
/* eslint-disable react/state-in-constructor */
import React from "react";
import { Redirect } from "react-router-dom";

class AddBooking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        location: "",
        date: "",
        contact_first_name: "",
        contact_last_name: "",
        contact_phone_number: "",
        contact_email: "",
        contact_relationship: ""
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
      location,
      date,
      contact_first_name,
      contact_last_name,
      contact_phone_number,
      contact_email,
      contact_relationship
    } = this.state;
    const { success } = this.props;

    console.log(this.state.form);
    return (
      <form>
        <h1>Book an Event</h1>
        <p>Select Location:</p>
        <select name="location" onChange={this.handleChange} value={location}>
          {this.props.locations.map(location => {
            return (
              <option key={location.id} value={location.id}>
                {location.name}
              </option>
            );
          })}
        </select>
        <p>Enter Date of Event:</p>
        <input
          name="date"
          onChange={this.handleChange}
          type="date"
          value={date}
        />
        <p>Enter Contact First Name:</p>
        <input
          name="contact_first_name"
          onChange={this.handleChange}
          type="text"
          value={contact_first_name}
        />
        <p>Enter Contact Last Name:</p>
        <input
          name="contact_last_name"
          onChange={this.handleChange}
          type="text"
          value={contact_last_name}
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
        <br />
        <br />
        <button onClick={this.handleClick} type="button">
          Submit
        </button>
        {success && <Redirect to="/" />}
      </form>
    );
  }
}
export default AddBooking;
