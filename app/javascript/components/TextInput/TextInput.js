import styled from "styled-components";

const HalfInput = styled.input`
  /* position: absolute;
  left: ${props => props.theme.contentPaddingLeft};
  right: 0%;
  top: 31.25%;
  bottom: 0%; */
  background: #FFFFFF;
  border: 1px solid ${props => props.theme.zircon};
  box-sizing: border-box;
  width: 100%;
  height: 65px;
  margin-bottom: 40px;
  font-size: 25px;
  padding-left: 20px;
  padding-right: 20px;
`;

const FullInput = styled.input`
  /* left: ${props => props.theme.contentPaddingLeft}; */
  /* top: 31.25%; */
  /* bottom: 0%; */
  /* background: #ffffff; */
  border: 1px solid ${props => props.theme.zircon};
  box-sizing: border-box;
  width: 100%;
  height: 80px;
  margin-bottom: 40px;
  font-size: 25px;
  padding-left: 20px;
  padding-right: 20px;
`;

const ThirdInput = styled.input`
  left: ${props => props.theme.contentPaddingLeft};
  /* right: 0%; */
  /* top: 31.25%; */
  /* bottom: 0%; */
  */background: #ffffff;
  border: 1px solid ${props => props.theme.zircon};
  box-sizing: border-box;
  width: 100%;
  height: 65px;
  margin-bottom: 40px;
  font-size: 25px;
  padding-left: 20px;
  padding-right: 20px;
`;

const StyledSelect = styled.select`
  border: 1px solid ${props => props.theme.zircon};
  height: 65px;
  width: 100%;
  font-size: 25px;
  background: ${props => props.theme.pureWhite};
  appearence: none;
  padding-left: 20px;
  padding-right: 20px;
`;

export { HalfInput, FullInput, ThirdInput, StyledSelect };
