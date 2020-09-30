import artistCard from "./ArtistCard";
import React, { Component, useState } from "react";

import { connect, useSelector, useDispatch } from "react-redux";
import { getArtists } from "../redux/actions/initializeArtists";

const mapStateToProps = (state) => {
  return { ...state };
};

class ArtistList extends Component {
  constructor() {
    super();
    this.listItems = this.listItems.bind(this);
  }

  listItems(items) {
    return items.map((item) => <ul>{artistCard(item)}</ul>);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) {
      this.setState({ ...this.props });
    }
  }

  componentDidMount() {
    this.props.getArtists(this.props.pagination);
  }

  render() {
    if (this.state?.artists) {
      return (
        <div className="container">
          <h4>Artists</h4>
          <div className="container">{this.listItems(this.state.artists)}</div>
        </div>
      );
    } else {
      return <></>;
    }
  }
}

export default connect(mapStateToProps, { getArtists })(ArtistList);
