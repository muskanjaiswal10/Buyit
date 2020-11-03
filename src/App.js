import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route paths="/checkout">
            <h1>Checkout</h1>
          </Route>   
          <Route path= "/login">
          <h1>Login Page</h1>
          </Route> 
          {/*This is default route*/}
          <Route path="/">
            <Header />
          <h1>Home PAGE!!</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
