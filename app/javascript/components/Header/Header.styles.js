import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: ${props => props.theme.funBlue};
  border-radius: 0px 0px 0 30px;
  padding: 40px 30px 90px;

  h1 {
    color: ${props => props.theme.broom};
    font-family: ${props => props.theme.sansSerif};
    font-weight: ${props => props.theme.weightBlack};
    text-transform: uppercase;
    font-size: 4.8rem;
    line-height: 1;
    margin: 0;
    padding: 0;
  }
`;

export { StyledHeader };
