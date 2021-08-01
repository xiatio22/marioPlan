import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./component/dashboard/Dashboard";
import Navbar from "./component/layout/Navbar";
import ProjectDetails from "./component/project/ProjectDetails";
import SignIn from "./component/auth/SignIn";
import SignUp from "./component/auth/SignUp";
import CreateProject from "./component/project/CreateProject";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/project/:id" component={ProjectDetails} />
            <Route path="/signin" component={SignIn}></Route>
            <Route path="/signup" component={SignUp}></Route>
            <Route path="/create" component={CreateProject}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
