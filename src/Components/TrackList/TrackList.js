import React from 'react';
import './TrackList.css';
import Track from '../Track/Track.js';

class TrackList extends React.Component {
  /*constructor(props) {
    super(props);
    this.state = {remove: null};
    this.isRemoval = this.isRemoval.bind(this);
  }

isRemoval(removal) {
  console.log('does is removal func get hit?');
  if (removal === 'yes') {
    console.log('yes is hit');
    this.setState = {remove: false};
  }
  else if (removal === 'no') {
    console.log('no is hit');
    this.setState = {remove: true};
  }
}*/

  render() {
    console.log(this.props.tracks);
    return (
      <div className="TrackList">
      {
    this.props.tracks.map(track => {
      return <Track track={track} key={track.id} onAdd={this.props.onAdd} onRemove={this.props.onRemove} isRemoval={this.props.isRemoval} />
    })
}
</div>
)
//return <p>{this.props.tracks}</p>
  }
}

export default TrackList;
