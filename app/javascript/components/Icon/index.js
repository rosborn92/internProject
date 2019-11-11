import React from "react";

import { Chevron } from "./Chevron";
import { Search } from "./Search";

const Icon = props => {
  switch (this.props.name.toLowerCase()) {
    case "chevron":
      return <Chevron {...props} />;
    case "search":
      return <Search {...props} />;
    default:
      return <div />;
  }
};

export { Icon };
