import styled from "styled-components";

// import React from "react";
// import { StyledInput } from "./TextInput.styles";

const TextInput = styled.input`
  /* position: absolute;
  left: ${props => props.theme.contentPaddingLeft};
  right: 0%;
  top: 31.25%;
  bottom: 0%; */
  background: #FFFFFF;
  border: 1px solid ${props => props.theme.zircon};
  box-sizing: border-box;
  width: 500px;
  height: 65px;
  margin-bottom: 40px;
  font-size: 25px;
`;

export { TextInput };
