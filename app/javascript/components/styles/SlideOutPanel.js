import styled from "styled-components";

const StyledSlideOutPanel = styled.div`
  background: ${props => props.theme.pureWhite};
  border: 1px solid ${props => props.theme.whiteSmoke};
  box-sizing: border-box;
  box-shadow: 2px 2px 20px rgba(${props => props.theme.black}, 0.2);
  border-radius: 30px 0px 0px 0px;
  padding: 30px ${props => props.theme.contentPaddingLeft};
  position: relative;
  margin-left: 60px;
  margin-top: -50px;
`;

const BookingSlideOutPanel = styled.div`
  background: ${props => props.theme.pureWhite};
  border: 1px solid ${props => props.theme.whiteSmoke};
  box-sizing: border-box;
  box-shadow: 2px 2px 20px rgba(${props => props.theme.black}, 0.2);
  border-radius: 30px 0px 0px 0px;
  padding: 30px ${props => props.theme.contentPaddingLeft};
  position: relative;
  margin-left: 60px;
  margin-top: -65px;
  min-height: calc(100vh - 175px);
`;

export { StyledSlideOutPanel, BookingSlideOutPanel };
