import { textInputs } from "polished";
import React from "react";
import { Redirect } from "react-router-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { StyledFormLayout } from "../styles/Forms";
import { StyledSlideOutPanel } from "../styles/SlideOutPanel";
import { StyledLabel } from "../styles/Typography";
import { Icon } from "../Icon"

import {
  AddBookingHeader,
  FormSectionHeader,
  SaveBookingButton,
  BookingInput
} from "..";

class AddBooking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        contact_first_name: "",
        contact_last_name: "",
        contact_phone_number: "",
        contact_email: "",
        contact_relationship: "",
        reference: ""
      }
    };
  }

  static defaultProps= {
    location_id: "JSC Innovation Lab"
  }

  handleChange = e => {
    const { form } = this.state;
    const { name, value } = e.target;

    form[name] = value;
    this.setState({ form });
  };

  handleClick = () => {
    const { form } = this.state;

    this.props.handleNewBooking(form);
  };

  render() {
    const {
      success,
     } = this.props;

    const {
      contact_first_name,
      contact_last_name,
      contact_phone_number,
      contact_email,
      contact_relationship,
      reference
         } =this.state;

    console.log(this.state.form);
    return (
      <>
        <AddBookingHeader location_id= {this.props.location_id} name="Add a Booking"  />

        <StyledSlideOutPanel>
          <FormSectionHeader name="BOOKING CONTACT" />
          <form>
            <StyledFormLayout>
              <div className="half">
                <StyledLabel>First Name</StyledLabel>
                <BookingInput
                  id="contact_first_name"
                  name="contact_first_name"
                  onChange={this.handleChange}
                  type="text"
                  value={contact_first_name}
                  placeholder = "First Name"
                />
              </div>
              <div className="half">
                <StyledLabel>Last Name</StyledLabel>
                <BookingInput
                  id="contact_last_name"
                  name="contact_last_name"
                  onChange={this.handleChange}
                  type="text"
                  value={contact_last_name}
                  placeholder= "Last Name"
                />
              </div>
              <div className="half">
                <StyledLabel>Phone Number</StyledLabel>
                <BookingInput
                  id="contact_phone_number"
                  name="contact_phone_number"
                  onChange={this.handleChange}
                  type="text"
                  value={contact_phone_number}
                  placeholder= "(xxx) xxx-xxxx"
                />
              </div>
              <div className="half">
                <StyledLabel>Email Address</StyledLabel>
                <BookingInput
                  id="contact_email"
                  name="contact_email"
                  onChange={this.handleChange}
                  type="text"
                  value={contact_email}
                  placeholder= "example@email.com"
                />
              </div>
              <div className="half">
                <StyledLabel>Relationship to Location</StyledLabel>
                <BookingInput
                  id="contact_relationship"
                  name="contact_relationship"
                  onChange={this.handleChange}
                  type="text"
                  value={contact_relationship}
                  placeholder=" Event Coordinator"
                />
              </div>
              <div className="full align-right">
                <SaveBookingButton
                  id="button"
                  onClick={this.handleClick}
                  type="button"
                >
                  SAVE BOOKING
                </SaveBookingButton>
              </div>
              {success && <Redirect to="/" />}
            </StyledFormLayout>
          </form>
        </StyledSlideOutPanel>
      </>
    );
  }
}
export { AddBooking };
