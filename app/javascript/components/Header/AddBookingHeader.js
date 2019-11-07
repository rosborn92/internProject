import React from "react";

import { AddBookingStyledHeader } from "./AddBookingHeader.styles";
import { LocationIdHeader } from "./AddBookingHeader.styles";
import { Icon } from "../Icon"
const AddBookingHeader = ({ name, location_id }) => (
  <AddBookingStyledHeader>
    <h1>{name}</h1>
    <hr></hr>
    <LocationIdHeader>{location_id}
  <span style= {{marginLeft: "20px"}}>  <Icon name="vector" height= "12" width= "20" /> </span>
    </LocationIdHeader>
  </AddBookingStyledHeader>
);

export { AddBookingHeader };
