import PropTypes from "prop-types";
import React from "react";

import { StyledH3, StyledSubHeader } from "./FormSectionHeader.styles";

const FormSectionHeader = ({ name }) => (
  <>
    <br />
    <StyledH3>{name}</StyledH3>
  </>
);

const BookingSectionHeader = ({ name }) => (
  <>
    <br />
    <StyledH3>{name}</StyledH3>
    <StyledSubHeader>
      Only if different from the location contact.
    </StyledSubHeader>
  </>
);

BookingSectionHeader.propTypes = {
  name: PropTypes.string
};
export { FormSectionHeader, BookingSectionHeader };
