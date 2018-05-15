import React from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList.js';

class Playlist extends React.Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

handleNameChange() {
  //triggers the updatePlaylistName() method on app.js
  this.props.onNameChange;
}

  render() {
    console.log(this.props.playlistTracks);
    return (
      <div className="Playlist">
      <p log={console.log('Im playlist.js')}></p>
        <input defaultValue={'New Playlist'} onChange={this.handleNameChange} />
        <TrackList tracks={this.props.playlistTracks} onRemove={this.props.onRemove} isRemoval={true}/>
        <a className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</a>
      </div>
    )
  }
}

export default Playlist;
