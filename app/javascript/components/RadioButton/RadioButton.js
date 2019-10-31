import React from "react";

import { StyledRadioButton } from "./RadioButton.styles";

const RadioButton = ({ name, label, value, onChange }) => (
  <StyledRadioButton>
    <input name={name} onChange={onChange} type="radio" value={value} />
    <span>{label}</span>
  </StyledRadioButton>
);

export { RadioButton };
