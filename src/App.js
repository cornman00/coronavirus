import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Home/Navbar";
import Sidebar from "./components/Home/Sidebar";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Sidebar />
        <Switch>
          <Route exact path="/" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
