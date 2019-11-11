import styled from "styled-components";

const StyledLayout = styled.div`
  display: grid;
  grid-template-columns: 225px 1fr;
  grid-template-areas: "sidebar main";

  main {
    grid-area: main;
    background: ${props => props.theme.whiteSmoke};
  }
`;

export { StyledLayout };
