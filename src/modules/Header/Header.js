import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

import { Authenticate, Logout } from "../../actions/userAction";

import "./Header.css";

class Header extends Component {
  render() {
    return (
      <header>
        <h1>Like Machine</h1>
        {!this.props.User.isAuthenticated ? (
          <div className="header__auth">
            <FacebookLogin
              appId="252344068758074"
              autoLoad
              callback={(response)=>{this.props.Authenticate(response)}}
              scope="public_profile,email"
              render={renderProps => (
                <a className="fb_login" onClick={() => {renderProps.onClick()}}>
                  <img src="fb_icon.png" alt="facebook" />
                </a>
              )}
            />
            <input type="text" placeholder="username" />
            <input type="text" placeholder="password" />
            <button>Login</button>
          </div>
        ) : (
          <div className="header__auth">
            <span className="header_username">Hello, {this.props.User.username}</span>
            <button onClick={()=>{this.props.Logout(this.props.User.session_id)}}>Logout</button>
          </div>
        )}
      </header>
    );
  }
}


function mapStateToProps(state) {
  return {
    User: state.User
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      Authenticate: Authenticate,
      Logout: Logout
    },
    dispatch
  );
}

export default connect(mapStateToProps, matchDispatchToProps)(Header);
