import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar.js';
import SearchResults from '../SearchResults/SearchResults.js';
import Playlist from '../Playlist/Playlist.js';
import Spotify from '../../util/Spotify.js';

/*const track = {
  id: '123456',
  name: 'test1',
  album: 'album1',
  artist: 'artist1',
  uri: '444rrrrrs'
};

const track2 = {
  id: '123457',
  name: 'test2',
  album: 'album2',
  artist: 'artist2',
  uri: '444rrrrrt'
};
*/
//remove hardocded businesses info:
//const playlistTracks = [track, track, track, track, track];


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playlistTracks: [],
      playlistTrack: [],
      searchResults: [],
      playlistName: '',
      trackURIs: [],
    };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

addTrack(track) {


  if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      //dnont't add it.
      console.log('dont add');
      return;
  }
  else {
    //add it.
    let tracks = this.state.playlistTracks.slice();
    tracks.push(track);
    this.setState({playlistTracks: tracks});
  }
}

removeTrack(track) {
    //remove from array
    console.log('remove song');
    let tracks = this.state.playlistTracks.slice();
    tracks.pop(track);
    this.setState({playlistTracks: tracks});
}

updatePlaylistName(name) {
  this.setState({
      playlistName: name,
  });
}

savePlaylist() {
  console.log('save play list get hit?');
  let trackURIs = this.state.playlistTracks.uri;

  this.setState({
    trackURIs: [trackURIs],
    });

    Spotify.savePlaylist(this.state.playlistName, this.state.trackURIs);
}

search(search) {
  Spotify.getAccessToken();
  console.log(search);
  Spotify.search(search).then(searchResults => {
    this.setState({ searchResults: searchResults });
  });
  debugger;
}

  render() {
    console.log(this.state.searchResults);
    console.log(this.state.playlistTracks);
    return (
      <div>
  <h1>Ja<span className="highlight">mmm</span>ing</h1>
  <div className="App">
    <SearchBar onSearch={this.search} />
    <div className="App-playlist">
      <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
      <Playlist playlistTracks={this.state.playlistTracks} playlistName={this.state.playlistName} onRemove={this.removeTrack} onNameChange={this.updatePlaylistName} onSave={this.savePlaylist} />
    </div>
  </div>
</div>
    )
  }
}

export default App;
