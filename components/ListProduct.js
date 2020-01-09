import React, { Component } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import "./ListProduct.css";
class ListProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      productName: "",
      result: null,
      image: []
    };
  }
  deleteClick = id => {
    var numb = JSON.parse(localStorage.getItem("user"));

    var res = numb.filter(nu => {
      return nu.id != id;
    });

    localStorage.setItem("user", JSON.stringify(res));
    var r = this.state.data.filter(re => {
      return re.id != id;
    });
    this.setState({ data: r });
  };

  handleChange = evt => {
    const value = evt.target.value;
    this.setState({ [evt.target.name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const data = JSON.parse(localStorage.getItem("user"));

    const da = data.filter(dat => {
      return dat.productName == this.state.productName;
    });
    this.setState({
      data: da
    });
  };
  handleInput = e => {
    const file = e.target.files[0];
    this.setState({ [e.target.id]: file });
  };

  render() {
    return (
      <div className="main">
        <div className="w3-container w3-dark-grey">
          <h1>Header</h1>
        </div>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Products</Breadcrumb.Item>
          <Breadcrumb.Item active>List</Breadcrumb.Item>
        </Breadcrumb>

        <div className="ui container">
          <form className="ui form" onSubmit={this.handleSubmit}>
            <label> Search</label>
            <div className="ui three wide field">
              <input
                type="text"
                name="productName"
                placeholder="Search "
                value={this.state.productName}
                onChange={this.handleChange}
              />
            </div>

            <button className="ui button" type="submit">
              Search
            </button>
          </form>
        </div>

        {this.state.data !== null && (
          <table className="table1">
            <tr>
              <th>Product Name</th>
              <th>Product Code</th>
              <th> Quantity</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Action</th>
            </tr>

            {this.state.data !== null &&
              this.state.data.map(da => (
                <tr key={da.id}>
                  <td>{da.productName}</td>
                  <td>{da.productCode}</td>
                  <td>{da.quantity}</td>
                  <td>{da.startDate}</td>
                  <td>{da.endDate}</td>
                  <td>
                    <button onClick={() => this.deleteClick(da.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </table>
        )}
      </div>
    );
  }
}

export default ListProduct;
