import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import LeftSidebar from "../components/LeftSidebar";
import AddProduct from "../components/AddProduct";
import ListProduct from "../components/ListProduct";
import Products from "../components/Products";
import Login from "../components/Login";
import Profile from "../components/Profile";
import Logout from "../components/Logout";
class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <LeftSidebar />

          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route exact path="/login" component={Login} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/add" component={AddProduct} />
          <Route exact path="/products/list" component={ListProduct} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
