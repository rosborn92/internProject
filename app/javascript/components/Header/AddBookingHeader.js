import React from "react";

import { Icon } from "../Icon";

import {
  AddBookingStyledHeader,
  LocationIdHeader
} from "./AddBookingHeader.styles";

const AddBookingHeader = ({ name, location_id }) => (
  <AddBookingStyledHeader>
    <h1>{name}</h1>
    <hr />
    <LocationIdHeader>
      {location_id}
      <span style={{ marginLeft: "20px" }}>
        {" "}
        <Icon height="12" name="vector" width="20" />{" "}
      </span>
    </LocationIdHeader>
  </AddBookingStyledHeader>
);

export { AddBookingHeader };
