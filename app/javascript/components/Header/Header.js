import React from "react";

import { StyledHeader } from "./Header.styles";

const Header = ({ name }) => (
  <StyledHeader>
    <h1>{name}</h1>
  </StyledHeader>
);

export { Header };
