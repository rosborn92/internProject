import React from "react";

import { AddBookingStyledHeader } from "./AddBookingHeader.styles";
import { LocationIdHeader } from "./AddBookingHeader.styles";

const AddBookingHeader = ({ name }) => (
  <AddBookingStyledHeader>
    <h1>{name}</h1>
    <hr></hr>
    <LocationIdHeader>{"JCS Innovation Lab"}</LocationIdHeader>

  </AddBookingStyledHeader>
);

export { AddBookingHeader };
