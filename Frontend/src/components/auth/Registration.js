import React, { Component } from "react";

export class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      password_confirmation: "",
      registerationErrors: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let inputs = e.target.children;
    // console.log("inputs = ", inputs);
    let username = inputs[0].value;
    let password = inputs[2].value;
    let passwordConf = inputs[4].value;
    // console.log(
    //   `username = ${username} : password = ${password} : conf_password = ${passwordConf}`
    // );
    if (password === passwordConf) {
      return fetch("http://localhost:3001/signup/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
      })
        .then(res => res.json())
        .then(res => {
          console.log(res.message);
          if (res.message === "successfully signed up") {
            this.props.handleSuccesfulAuth(res);
          }

          //   alert(res.message);
        });
    } else {
      alert("your password and password confirmation have to match!");
    }

    // console.log("form submitted");
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type='email'
            name='email'
            placeholder='enter email address'
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <br />
          <input
            type='password'
            name='password'
            placeholder='enter password'
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          <br />
          <input
            type='password'
            name='password_confirmation'
            placeholder='confirm password'
            value={this.state.password_confirmation}
            onChange={this.handleChange}
            required
          />
          <br />
          <button type='Submit'>Register</button>
        </form>
      </div>
    );
  }
}

export default Registration;
