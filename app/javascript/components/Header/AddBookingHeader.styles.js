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
    padding: 45px 35px 5px;
  }

  hr {
    width: 1210px;
    color: #0000;
    style: solid;
    margin-left:35px

  }
`;

const LocationIdHeader = styled.header`
  color: ${props => props.theme.pureWhite};
  font-family: ${props => props.theme.nunito};
  font-weight: 300;
  font-size: 16px;
  line-height: 25px;
  padding-top:20px;
  margin-left: 35px

`;





export { AddBookingStyledHeader, LocationIdHeader };
