import React from "react";

import { Chevron } from "./Chevron";
import { Search } from "./Search";
import { Vector } from "./Vector";

const Icon = props => {
  switch (props.name.toLowerCase()) {
    case "chevron":
      return <Chevron {...props} />;

    case "search":
      return <Search {...props} />;

    case "vector":
      return <Vector {...props} />;

    default:
      return <div />;
  }
};

export { Icon };
