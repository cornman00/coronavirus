import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Home/Navbar";
import Sidebar from "./components/Home/Sidebar";
import Main from "./components/Home/Main";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
