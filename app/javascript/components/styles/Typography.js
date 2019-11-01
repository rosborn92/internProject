import styled from "styled-components";

const StyledLabel = styled.label`
  color: ${props => props.theme.black};
  display: block;
  font-family: ${props => props.theme.sansSerif};
  line-height: 1.3;
  font-size: 1.6rem;
  font-weight: ${props => props.theme.weightBold};
  padding-top: 40px;
`;

export { StyledLabel };
