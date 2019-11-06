import React from "react";

import { AddBookingStyledHeader } from "./AddBookingHeader.styles";

const AddBookingHeader = ({ name }) => (
  <AddBookingStyledHeader>
    <h1>{name}</h1>
  </AddBookingStyledHeader>
);

export { AddBookingHeader };
