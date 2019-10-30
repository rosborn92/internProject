import React from "react";

import { StyledRadioButton } from "./RadioButton.styles";

const RadioButton = ({ name, label, value }) => (
  <StyledRadioButton>
    <input name={name} type="radio" value={value} />
    <span>{label}</span>
  </StyledRadioButton>
);

export { RadioButton };
