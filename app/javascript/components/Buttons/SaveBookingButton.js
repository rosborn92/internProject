import React from "react";

import { BookingStyledButton } from "./SaveBookingButton.styles";

const SaveBookingButton = ({ onClick }) => (
  <BookingStyledButton
    onClick={onClick} >
    <span>SAVE BOOKING</span>
  </BookingStyledButton>
);

export { SaveBookingButton };
