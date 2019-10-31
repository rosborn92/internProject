import styled from "styled-components";

const StyledFormLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-column-gap: 55px;
  .half {
    grid-column: span 3;
  }
  .full {
    grid-column: span 6;
  }
  .third {
    grid-column: span 2;
  }
`;

export { StyledFormLayout };
