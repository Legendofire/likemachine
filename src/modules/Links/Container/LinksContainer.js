import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import Link from "../Components/Link";
import { getLinks, like, unlike } from "../../../actions/linksAction";

import "./LinksContainer.css";

class LinksContainer extends Component {
  constructor(props) {
    super(props);
    this.openUrlAction = this.openUrlAction.bind(this);
  }

  componentDidMount() {
    this.props.getLinks();
  }

  openUrlAction(e, url) {
    e.preventDefault();
    var win = window.open(url, "_blank");
    win.focus();
  }

  render() {
    return (
      <div className="links__container">
        {this.props.Links.links.map(link => {
          return (
            <Link
              key={link.id}
              liked={link.liked || false}
              likeAction={() => this.props.like(link.id)}
              unlikeAction={() => this.props.unlike(link.id)}
              count={link.like_count || 0}
              title={link.title || "N/A"}
              description={link.description || "N/A"}
              url={link.url || "N/A"}
              openUrlAction={e => this.openUrlAction(e, link.url)}
              src={link.image_url || "N/A"}
            />
          );
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    Links: state.Links
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getLinks: getLinks
    },
    dispatch
  );
}

export default connect(mapStateToProps, matchDispatchToProps)(LinksContainer);
