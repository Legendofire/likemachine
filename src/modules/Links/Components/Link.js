import React, { Component } from "react";
import PropTypes from 'prop-types';

import "./Link.css";

export default class Link extends Component{
  render(){
    return(
      <div className="link__container">
        <div className="link__title">
          <h3>{this.props.title}</h3>
          <div className="likes__container">
            <a onClick={this.props.liked?this.props.unlikeAction:this.props.likeAction}>
              <img className={this.props.liked?"heart heart--liked":"heart"} src="heart.png" alt=""/>
            </a>
            <h3>{this.props.count}</h3>
          </div>
        </div>
        <a href={this.props.url} onClick={this.props.openUrlAction} className="link__image">
          <img src={this.props.src} alt=""/>
        </a>
        <div className="link__description">
          <h5>{this.props.description}</h5>
        </div>
      </div>
    )
  }
}

Link.propTypes = {
  title: PropTypes.string,
  likeAction: PropTypes.func,
  unLikeAction: PropTypes.func,
  liked: PropTypes.bool,
  count: PropTypes.number,
  url: PropTypes.string,
  openUrlAction: PropTypes.func,
  src: PropTypes.string,
  description: PropTypes.string
};
