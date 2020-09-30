import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <h3>Home</h3>
          </div>
          <div className="col-sm">
            <h3>Playlists</h3>
          </div>
          <div className="col-m">
            <h3>Play Queue</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
