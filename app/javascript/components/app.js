import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import AddLocation from "./AddLocation";
import { getLocations, createLocation } from "./api";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: [],
      success: false
    };
  }

  handleNewLocation = location => {
    createLocation(location).then(location => {
      this.setState({ success: true });
      getLocations().then(locations => {
        this.setState({ locations });
      });
    });
  };

  changeSuccess = value => {
    this.setState({ success: value });
  };

  componentDidMount() {
    this.changeSuccess(false);
  }

  render() {
    const { locations } = this.state;

    return (
      <Router>
        <div>
          <div> Hello World </div>
          <h3>
            <Link to="/AddLocation">Add Location</Link>
          </h3>

          {locations.map(location => {
            return (
              <div>
                <p>{location.name}</p>
                <p>{location.reference}</p>
              </div>
            );
          })}
        </div>
        <Route
          exact
          path="/AddLocation"
          render={props => {
            return (
              <AddLocation
                {...props}
                handleNewLocation={this.handleNewLocation}
                success={this.state.success}
              />
            );
          }}
        />
      </Router>
    );
  }
}
export default App;
