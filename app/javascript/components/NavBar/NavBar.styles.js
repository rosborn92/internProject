import styled from "styled-components";

const StyledAside = styled.aside`
  border-right: 1px solid ${props => props.theme.whiteSmoke};
  display: flex;
  flex-direction: column;
  height: 100vh;
  grid-area: sidebar;
  padding: 45px;
  position: fixed;
  width: 225px;

  ol {
    list-style-type: none;
    padding: 0;
  }

  ol.top-nav {
    counter-reset: nav-list;
    margin: 32px 0 0 0;

    li:before {
      color: ${props => props.theme.whiteSmoke};
      content: counter(nav-list, decimal-leading-zero);
      counter-increment: nav-list;
      font-family: ${props => props.theme.serif};
      left: -25px;
      position: absolute;
    }
  }

  ol.btm-nav {
    justify-self: flex-end;
    margin: auto 0 0 0;
  }

  li {
    font-family: ${props => props.theme.serif};
    font-size: 1.4rem;
    letter-spacing: 1px;
    margin-bottom: 15px;
    position: relative;
    text-transform: uppercase;

    a {
      color: ${props => props.theme.zircon};
      font-weight: normal;
      text-decoration: none;
    }
  }
`;

export { StyledAside };
