import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Home/Navbar";
import Main from "./components/Home/Main";
import Signup from "./components/Authentication/Signup";
import Login from "./components/Authentication/Login";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
