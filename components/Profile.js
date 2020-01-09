import React, { Component } from "react";
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    var values = JSON.parse(localStorage.getItem("cred"));
    var values1 = localStorage.getItem("currentUser");
    console.log(values, values1);

    for (var i in values) {
      var email = values[i].user;
      console.log(email);
      if (email == values1) {
        values[i].firstName = this.state.firstName;
        values[i].lastName = this.state.lastName;
      }
    }
    localStorage.setItem("cred", JSON.stringify(values));
    this.props.history.push("/products/add");
  };

  handleChange = e => {
    const value = e.target.value;
    this.setState({
      [e.target.name]: value
    });
  };
  render() {
    return (
      <div style={{ marginLeft: "12%" }}>
        <div>
          <form className="ui form" onSubmit={this.handleSubmit}>
            <label> First Name</label>
            <div className="ui three wide field">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={this.state.firstName}
                onChange={this.handleChange}
              />
            </div>
            <label> Last Name </label>
            <div className="ui three wide field">
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={this.state.lastName}
                onChange={this.handleChange}
              />
            </div>
            <button className="ui button" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Profile;
