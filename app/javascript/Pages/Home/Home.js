import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { AddLocation } from "../../components/AddLocation";
import { getLocations, createLocation } from "../../components/api";

class Home extends React.Component {
  componentDidMount() {
    this.props.changeSuccess(false);
  }

  render() {
    return (
      <>
        {this.props.locations.map(location => {
          return (
            <div key={location.id} style={{border:"1px black solid"}}>
              <p>Location: {location.name}</p>
              <p>Location: {location.contact_first_name}</p>
            </div>
          )
        })}
      </>
    );
  }
}
export { Home };
