import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import { getLocations, createLocation } from './api'
import AddLocation from './AddLocation'
import AddBooking from './AddBooking'

class Home extends React.Component{

  componentDidMount() {
    this.props.changeSuccess(false)
  }


  render() {
  return(
    <React.Fragment>
      {this.props.locations.map((location) => {
        return(
          <p key={location.id}>Location: {location.name}</p>
        )
      })}
    </React.Fragment>
  )
}
}
export default Home;
