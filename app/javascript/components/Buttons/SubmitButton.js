import React from "react";

import { StyledButton } from "./SubmitButton.styles";

const SubmitButton = ({ onClick }) => (
  <StyledButton
    onClick={onClick} >
    <span>SUBMIT</span>
  </StyledButton>
);

export { SubmitButton };
