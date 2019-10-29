import React from "react";
import { Redirect } from "react-router-dom"

class AddBooking extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      form: {
        location: "",
        date: "",
        contact_name: "",
        contact_phone_number: "",
        contact_email: "",
        contact_relationship: ""
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
      location,
      date,
      contact_name,
      contact_phone_number,
      contact_email,
      contact_relationship,
    } = this.state
    const { success } = this.props
    console.log(this.state.form)
  return(
    <React.Fragment>
      <form>
        <h1>Book an Event</h1>
          <p>Select Location:</p>
          <select
            name="location"
            value={location}
            onChange={this.handleChange}>
              {this.props.locations.map((location) => {
                return(
                  <option key={location.id} value={location.id}>{location.name}</option>
                )
              })}
          </select>
        <p>Enter Date of Event:</p>
        <input
        type="date"
        name="date"
        value={date}
        onChange={this.handleChange}
        />
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
        <br />
        <br />
        <button type="button" onClick={this.handleClick}>Submit</button>
        {success && <Redirect to="/" /> }
      </form>

    </React.Fragment>
  )
}
}
export default AddBooking;
