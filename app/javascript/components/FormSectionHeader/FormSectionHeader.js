import React from "react";

import { StyledH3 } from "./FormSectionHeader.styles";
import { StyledSubHeader } from "./FormSectionHeader.styles"

const FormSectionHeader = ({ name }) => (
  <>
    <br />
    <StyledH3>{name}</StyledH3>
    <StyledSubHeader>{"Only if different from the location contact."}</StyledSubHeader>
  </>
);

export { FormSectionHeader };
