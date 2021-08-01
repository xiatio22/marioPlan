import React, { Component } from "react";
import ProjectLists from "../project/ProjectLists";
import Notification from "./Notification";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

class Dashboard extends Component {
  render() {
    // console.log(this.props);
    const { projects, auth, notifications } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectLists projects={projects} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notification notifications={notifications} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.firestore.ordered.projects, //|| state.project.project,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications,
  };
};

export default compose(
  firestoreConnect([
    {
      collection: "projects",
      orderBy: ["createdAt", "desc"],
    },
    {
      collection: "notifications",
      limit: 5,
      orderBy: ["time", "desc"],
    },
  ]),
  connect(mapStateToProps)
)(Dashboard);
