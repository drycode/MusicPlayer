import React, { Component } from "react";
// import axios from 'axios'
import Header from "./Header.jsx";
import ArtistsList from "./ArtistsList.jsx";
// import AlbumsList from "./AlbumsList.jsx"
// import SongsList from "./SongsList.jsx"
// import Player from "./Player.jsx"

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ArtistsList />
        {/* <AlbumsList
          selectedArtist={selectedArtist}
          selectedAlbum={selectedAlbum}
          onChange={this.updateAlbum}
        />
        <SongsList
          {...this.state}
          onChange={this.updateSong}
          showComponent={showSongList}
        />
        <Player {...this.state} /> */}
      </div>
    );
  }
}

export default App;
