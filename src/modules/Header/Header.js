import React, { Component } from "react";

import "./Header.css"

export default class Header extends Component{
  render(){
    return(
      <header>
        <h1>Like Machine</h1>
        {
          false ?
            <div className="header__auth">
              <a className="fb_login" href=""><img src="fb_icon.png" alt="F"/></a>
              <input type="text" placeholder="username"/>
              <input type="text" placeholder="password"/>
              <button>Login</button>
            </div>
          :
            <div className="header__auth">
              <span className="header_username">Hello, Ahmed</span>
              <button>Logout</button>
            </div>

        }
      </header>
    )
  }
}
