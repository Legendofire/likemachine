import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import FloatingForm from "../Components/FloatingForm/FloatingForm";
import FloatingButton from "../Components/FloatingButton/FloatingButton";
import { AddLink } from "../../../actions/linksAction";

import "./FloatingFormContainer.css";

class FloatingFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFormOpen: false
    };
    this.toggleForm = this.toggleForm.bind(this);
  }

  toggleForm() {
    console.log("something");
    if (this.state.isFormOpen) {
      this.setState({ isFormOpen: false });
    } else {
      this.setState({ isFormOpen: true });
    }
  }

  render() {
    return (
      <div className="floatingformcontainer__container">
        {this.props.User.isAuthenticated ? (
          <span>
            <FloatingButton
              isFormOpen={this.state.isFormOpen}
              toggleFormAction={() => this.toggleForm()}
            />
            <FloatingForm
              isFormOpen={this.state.isFormOpen}
              formSubmitAction={this.props.AddLink}
              session_id={this.props.User.session_id}
            />
          </span>
        ) : null}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    Links: state.Links,
    User: state.User
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      AddLink: AddLink
    },
    dispatch
  );
}

export default connect(mapStateToProps, matchDispatchToProps)(
  FloatingFormContainer
);
