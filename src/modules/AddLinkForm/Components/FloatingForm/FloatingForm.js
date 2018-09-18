import React, { Component } from 'react';

import "./FloatingForm.css";

export default class FloatingForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      "title": "",
      "url": "",
      "img": ""
    }
    this.updateFormData = this.updateFormData.bind(this);
  }

  updateFormData(target){
    this.setState({[target.name]:target.value});
  }

  render(){
    return (
      <div className={this.props.isFormOpen === true ? "floatingform__container appear":"floatingform__container disappear"}>
        <h2>Add New Link</h2>
        <div className="form">
          <div className="formGroup">
            <label>Title:</label>
            <input onChange={(e)=>this.updateFormData(e.target)} name="title" type="text"/>
          </div>
          <div className="formGroup">
            <label>URL:</label>
            <input onChange={(e)=>this.updateFormData(e.target)} name="url" type="text"/>
          </div>
          <div className="formGroup">
            <label>Image URL:</label>
            <input onChange={(e)=>this.updateFormData(e.target)} name="img" type="text"/>
          </div>
          <button onClick={()=>this.props.formSubmitAction(this.state)}>Add</button>
        </div>
      </div>
    )
  }
}
