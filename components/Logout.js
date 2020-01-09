import React, { Component } from "react";
import { withRouter } from "react-router";
class Logout extends Component {
  render() {
    return (
      <div>
        {localStorage.removeItem("currentUser")}
        {this.props.history.push("/login")}
      </div>
    );
  }
}

export default withRouter(Logout);
