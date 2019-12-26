import React, { Component } from "react";

export class Dashboard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <h3>Status: {this.props.loggedInStatus}</h3>
      </div>
    );
  }
}

export default Dashboard;
