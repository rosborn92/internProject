import styled from "styled-components";

const AddBookingStyledHeader = styled.header`
  background-color: ${props => props.theme.funBlue};
  border-radius: 0px 0px 0 30px;
  height: 250px;
  position: relative;

  h1 {
    color: ${props => props.theme.broom};
    font-family: ${props => props.theme.sansSerif};
    font-weight: ${props => props.theme.weightBlack};
    text-transform: uppercase;
    font-size: 38px;
    line-height: 52px;
    padding: 45px 35px 25px;
    border-bottom: 1px solid #fff;
  }
`;

export { AddBookingStyledHeader };
