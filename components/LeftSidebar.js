import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./LeftSidebar.css";

class LeftSidebar extends Component {
  render() {
    return (
      <div
        className="w3-sidebar w3-light-grey w3-bar-block"
        style={{ width: "12%" }}
      >
        <Link to="/">
          <h3 className="w3-bar-item">Products</h3>
        </Link>
        <Link to="/products/add" className="w3-bar-item w3-button ">
          Add
        </Link>
        <Link to="/products/list" className="w3-bar-item w3-button">
          List
        </Link>
      </div>
    );
  }
}
export default LeftSidebar;
