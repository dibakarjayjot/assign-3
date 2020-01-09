import React, { Component } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import "./AddProduct.css";

class AddProduct extends Component {
  state = {
    productName: "",
    productCode: "",
    quantity: "",
    startDate: "",
    endDate: ""
  };

  handleChange = evt => {
    const value = evt.target.value;
    this.setState({ [evt.target.name]: value });
  };

  handleStart = date => {
    this.setState({ startDate: date });
  };

  handleEnd = date => {
    this.setState({ endDate: date });
  };
  handleSubmit = event => {
    event.preventDefault();

    var values = localStorage.getItem("user");

    var arr = values ? JSON.parse(values) : [];
    arr.length ? (this.state.id = arr.length + 1) : (this.state.id = 1);
    if (this.state) {
      arr.push(this.state);
    }
    localStorage.setItem("user", JSON.stringify(arr));

    this.setState({
      productName: "",
      productCode: "",
      quantity: "",
      startDate: new Date(),
      endDate: new Date()
    });
  };
  render() {
    return (
      <div className="main">
        <div className="w3-container w3-dark-grey ">
          <h2 style={{ float: "left" }}>Header</h2>
          <h2 style={{ float: "right" }} className="dropdown">
            <button className="dropbtn">
              {localStorage.getItem("currentUser")
                ? localStorage.getItem("currentUser")
                : null}
            </button>
            <div className="dropdown-content">
              <Link to="/profile" className="links">
                Profile
              </Link>
              <Link to="/Logout" className="links">
                Logout
              </Link>
            </div>
          </h2>
        </div>

        <Breadcrumb>
          <Breadcrumb.Item href="/">Products</Breadcrumb.Item>
          <Breadcrumb.Item active>Add</Breadcrumb.Item>
        </Breadcrumb>

        <div>
          <div className="ui container">
            <form className="ui form" onSubmit={this.handleSubmit}>
              <label>Product Name </label>
              <div className="ui three wide field">
                <input
                  type="text"
                  name="productName"
                  placeholder="Product Name"
                  value={this.state.productName}
                  onChange={this.handleChange}
                />
              </div>

              <label>Product Code </label>
              <div className="ui three wide field">
                <input
                  type="text"
                  name="productCode"
                  placeholder="Product Code"
                  value={this.state.productCode}
                  onChange={this.handleChange}
                />
              </div>

              <label>Quantity </label>
              <div className="ui three wide field">
                <input
                  type="number"
                  name="quantity"
                  placeholder="Quantity"
                  value={this.state.quantity}
                  onChange={this.handleChange}
                />
              </div>

              <label>Start Date</label>
              <div className="ui six wide field" style={{ width: "200px" }}>
                <DatePicker
                  onChange={this.handleStart}
                  dateFormat="dd/MM/yyyy"
                  selected={this.state.startDate}
                  placeholder="Start Date"
                />
              </div>

              <label>End Date</label>
              <div className="ui six wide field">
                <DatePicker
                  minDate={this.state.startDate}
                  dateFormat="dd/MM/yyyy"
                  onChange={this.handleEnd}
                  selected={this.state.endDate}
                  placeholder="End Date"
                />
              </div>

              <button className="ui button" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
        {localStorage.getItem("user")}
      </div>
    );
  }
}

export default AddProduct;
