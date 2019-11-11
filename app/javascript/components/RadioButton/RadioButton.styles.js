import styled from "styled-components";

import check from "./images/radio-button--checked.svg";
import uncheck from "./images/radio-button--unchecked.svg";

const StyledRadioButton = styled.label`
  color: ${props => props.theme.black};
  cursor: pointer;
  font-family: ${props => props.theme.sansSerif};
  font-size: 1.6rem;
  line-height: 30px;
  white-space: nowrap;

  input[type="radio"] + span {
    background: url(${uncheck}) left top no-repeat;
    display: inline-block;
    margin-right: 25px;
    min-height: 30px;
    padding-left: 40px;
    position: relative;
    margin-left: -15px;
    margin-bottom: 10px;
    minimum-height: 30px;
  }

  input[type="radio"]:checked + span {
    background: url(${check}) left top no-repeat;
  }
`;

export { StyledRadioButton };
