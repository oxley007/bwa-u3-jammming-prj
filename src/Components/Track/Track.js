import React from 'react';
import './Track.css';

let isRemoval;

class Track extends React.Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.renderAction = this.renderAction.bind(this);
  }

/*
Create a method called renderAction that displays a - anchor tag if the
isRemoval property is true, and a + anchor tag if the isRemoval property is
false. Set the class name to Track-action.
*/
renderAction() {

  if (this.props.isRemoval === true) {
    return <a className="Track-action" onClick={this.removeTrack}> - </a>
  }
  else if (this.props.isRemoval === false) {
    return <a className="Track-action" onClick={this.addTrack}> + </a>
  }
}

addTrack() {
  //pass track to onAdd that will pass it to the addTrack() function on App.js
  console.log(this.props.track);
  this.props.onAdd(this.props.track);
  return isRemoval = true;
}

removeTrack() {
  //pass track to onRemove that will pass it to the removeTrack() function on App.js
  this.props.onRemove(this.props.track);
  return isRemoval = false;
}

  render() {
    return (
      <div className="Track">
  <div className="Track-information">
    <h3>{this.props.track.name}</h3>
    <p>{this.props.track.artist} | {this.props.track.album}</p>
  </div>
  {this.renderAction()}
</div>
    )
  }
}

export default Track;
