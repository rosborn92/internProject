import styled from "styled-components";

const LocationStyledInput = styled.input`
  left: ${props => props.theme.contentPaddingLeft};
  right: 0%;
  top: 31.25%;
  bottom: 0%;
  */background: #ffffff;
  border: 1px solid ${props => props.theme.zircon};
  box-sizing: border-box;
  width: 1050px;
  height: 78px;
  margin-bottom: 40px;
  font-size: 25px;
`;

const StyledSelect = styled.select`
  border: 1px solid ${props => props.theme.zircon};
  height: 78px;
  font-size: 25px;
  background: ${props => props.theme.pureWhite};
  appearence: none;
`;

export { LocationStyledInput, StyledSelect };
