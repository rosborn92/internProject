import styled from "styled-components";

const AddBookingStyledHeader = styled.header`
  background-color: ${props => props.theme.funBlue};
  border-radius: 0px 0px 0 30px;
  padding: 40px 30px 90px;

  h1 {
    color: ${props => props.theme.broom};
    font-family: ${props => props.theme.sansSerif};
    font-weight: ${props => props.theme.weightBlack};
    text-transform: uppercase;
    font-size: 38px;
    line-height: 52px;
    margin: 0;
    padding: 0 0 0 37px;
  }

  hr {
    width: 100%;
    color: #0000;
    style: solid;
    margin-left: 35px;
    display: inline-block;
  }
`;

const LocationIdHeader = styled.header`
  color: ${props => props.theme.pureWhite};
  font-family: ${props => props.theme.nunito};
  font-weight: 200;
  font-size: 18px;
  line-height: 25px;
  padding-top: 20px;
  margin-left: 35px;
`;

export { AddBookingStyledHeader, LocationIdHeader };
