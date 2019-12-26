import React, { Component } from "react";
import Registration from "./auth/Registration";

export class Home extends Component {
  constructor(props) {
    super(props);

    this.handleSuccesfulAuth = this.handleSuccesfulAuth.bind(this);
  }

  handleSuccesfulAuth(data) {
    //update parent component
    this.props.handleLogin(data);
    //redirect user
    this.props.history.push("/dashboard");
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <h3>Status: {this.props.loggedInStatus}</h3>
        <Registration handleSuccesfulAuth={this.handleSuccesfulAuth} />
      </div>
    );
  }
}

export default Home;
