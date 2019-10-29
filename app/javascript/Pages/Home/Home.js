import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { AddLocation } from "../../Components/AddLocation";
import { getLocations, createLocation } from "../../Components/api";

class Home extends React.Component {
  componentDidMount() {
    this.props.changeSuccess(false);
  }

  render() {
    return (
      <>
        {this.props.locations.map(location => {
          return <p key={location.id}>Location: {location.name}</p>;
        })}
      </>
    );
  }
}
export { Home };
