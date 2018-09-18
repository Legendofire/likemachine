import React, { Component } from 'react';

import LinksContainer from "../Links";
import Header from "../Header/Header";
import AddLinkForm from "../AddLinkForm";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
          <Header/>
          <LinksContainer/>
          <AddLinkForm/>
      </div>
    );
  }
}

export default App;
