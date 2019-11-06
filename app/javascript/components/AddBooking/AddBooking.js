import { textInputs } from "polished";
import React from "react";
import { Redirect } from "react-router-dom";
import { StyledFormLayout } from "../styles/Forms";
import { StyledSlideOutPanel } from "../styles/SlideOutPanel";
import { StyledLabel } from "../styles/Typography";

import {
  AddBookingHeader,
  FormSectionHeader,
  SaveBookingButton,
  HalfInput,
} from "..";

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
      <>
        <AddBookingHeader name="Add a Booking" />
        <StyledSlideOutPanel>
        <FormSectionHeader name="BOOKING CONTACT" />
          <form>
            <StyledFormLayout>
              <div className= "half">
                <StyledLabel>First Name</StyledLabel>
                <HalfInput
                  id= "contact_first_name"
                  name= "contact_first_name"
                  onChange={this.handleChange}
                  type="text"
                  value={contact_first_name}
                />
              </div>
              <div className= "half">
               <StyledLabel>Last Name</StyledLabel>
               <HalfInput
                 id= "contact_last_name"
                 name="contact_last_name"
                 onChange={this.handleChange}
                 type="text"
                 value={contact_last_name}
               />
             </div>
             <div className= "half">
               <StyledLabel>Enter Contact Phone Number</StyledLabel>
               <HalfInput
                 id="contact_phone_number"
                 name="contact_phone_number"
                 onChange={this.handleChange}
                 type="text"
                 value={contact_phone_number}
               />
             </div>
             <div className= "half">
              <StyledLabel>Enter Contact Email</StyledLabel>
              <HalfInput
                id="contact_email"
                name="contact_email"
                onChange={this.handleChange}
                type="text"
                value={contact_email}
              />
            </div>
            <div className= "half">
              <StyledLabel>Relationship to Location</StyledLabel>
              <HalfInput
                id="contact_relationship"
                name="contact_relationship"
                onChange={this.handleChange}
                type="text"
                value={contact_relationship}
              />
            </div>
            <div className= "full align-right">
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
