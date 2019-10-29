import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import styled, { ThemeProvider } from "styled-components/macro";

import AddLocation from "./AddLocation";
import { getLocations, createLocation } from "./api";
import Home from "./Home";
import Logo from "./Logo";
import GlobalStyle from "./styles/Global";
import Theme from "./styles/Theme";

const StyledLayout = styled.div`
  display: grid;
  grid-template-columns: 225px 1fr;
  grid-template-areas: "sidebar main";

  aside {
    border-right: 1px solid ${props => props.theme.whiteSmoke};
    display: flex;
    flex-direction: column;
    height: 100vh;
    grid-area: sidebar;
    padding: 45px;
    position: fixed;

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
  }

  main {
    grid-area: main;
  }
`;

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
            <aside>
              <Logo />
              <ol className="top-nav">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/AddLocation">Add Location</Link>
                </li>
              </ol>
              <ol className="btm-nav">
                <li>
                  <Link>Settings</Link>
                </li>
                <li>
                  <Link>Logout</Link>
                </li>
              </ol>
            </aside>

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
export default App;
