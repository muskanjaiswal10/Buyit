import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route paths="/checkout">
            <h1>Checkout</h1>
          </Route>   
          <Router path= "/login">
          <h1>Login Page</h1>
          <Router> 
          {/*This is default route*/}
          <Route path="/">
          <h1>Home PAGE!!</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
