import './App.css';
import React, {useEffect} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from "./StateProvider";
import { auth } from './firebase';

function App() {
const [{user}, dispatch ] = useStateValue();
 //useEffect <<<<<< POWERFUL
 // Piece of code which runs based on a given condition
useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged((authUser) => {
    if(authUser) {
      //The user is logged in
      dispatch({
        
          type: "SET_USER",
          user: authUser,
        
      });
    } else{
      dispatch({
        type: "SET_USER",
        user: null,
      });
      //the user is logged out
    }
  });
  return () => {
    // Any cleanup operations goes in here
    unsubscribe();
  }
 
}, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>   
          <Route path= "/login">
            <Login />
          </Route> 
          {/*This is default route*/}
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
