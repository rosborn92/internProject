import styled from "styled-components";

const StyledH3 = styled.h3`
  font-family: ${props => props.theme.serif};
  color: ${props => props.theme.funBlue};
  display: inline-block;
  text-transform: uppercase;
  font-size: 1.8rem;
  font-style: italic;
  font-weight: ${props => props.theme.weightRegular};
  line-height: 2rem;
  letter-spacing: 0.15rem;
  padding-bottom: 12px;
  position: relative;
  margin-top: -70px;

  &:before {
    border-bottom: 1px solid ${props => props.theme.funBlue};
    bottom: 0;
    content: "";
    display: block;
    left: ${props => props.theme.offsetContentPaddingLeft};
    position: absolute;
    width: calc(100% + ${props => props.theme.contentPaddingLeft});
  }
`;

const StyledSubHeader = styled.header`
  font-family: ${props => props.theme.georgia};
  font-size: 18px;
  font-style: italic;
  line-height: 20px;
  color: #000000;
`;

export { StyledH3, StyledSubHeader };
