import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import styled, { ThemeProvider } from "styled-components/macro";

import { Home } from "../../Pages/Home";
import { AddLocation } from "../AddLocation";
import { getLocations, createLocation } from "../api";
import { NavBar } from "../NavBar";
import GlobalStyle from "../styles/Global";
import Theme from "../styles/Theme";

import { StyledLayout } from "./App.styles";

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
    getLocations().then(locations => {
      this.setState({ locations });
    });
  }

  // componentDidUpdate(prevState) {
  //     if(prevState.locations != this.state.locations) {
  //         this.setState({success: false})
  //     }
  // }

  render() {
    const { locations } = this.state;

    return (
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <StyledLayout>
          <Router>
            <NavBar />

            <main>
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

              <Route
                exact
                path="/"
                render={props => {
                  return (
                    <Home
                      {...props}
                      changeSuccess={this.changeSuccess}
                      locations={this.state.locations}
                      success={this.state.success}
                    />
                  );
                }}
              />
            </main>
          </Router>
        </StyledLayout>
      </ThemeProvider>
    );
  }
}
export { App };
