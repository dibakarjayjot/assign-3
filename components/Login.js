import React, { Component } from "react";
import { withRouter } from "react-router";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  handleChange = e => {
    const value = e.target.value;
    this.setState({ [e.target.name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    var data = JSON.parse(localStorage.getItem("cred"));
    for (var i in data) {
      var email = data[i].user;
      var password = data[i].pw;
      if (email == this.state.email) {
        if (password == this.state.password) {
          localStorage.setItem("currentUser", email);
          this.props.history.push("/profile");
        } else {
          console.log("Password was incorrect");
        }
      }
    }
  };
  render() {
    return (
      <div style={{ marginLeft: "12%" }}>
        <div>
          <form className="ui form" onSubmit={this.handleSubmit}>
            <label> Email</label>
            <div className="ui three wide field">
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>
            <label> Password </label>
            <div className="ui three wide field">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>
            <button className="ui button" type="submit">
              Log In
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
