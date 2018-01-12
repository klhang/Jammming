import React from 'react';
import './Track.css';

class Track extends React.Component{
  constructor(props){
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  addTrack(){
    this.props.onAdd(this.props.track);
  }

  removeTrack(){
    this.props.onRemove(this.props.track);
  }

  renderAction(){
    if(this.props.isRemoval){
      return '-';
    } else {
      return '+';
    }
  }
  render(){
    return(
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artist} | {this.props.track.album}</p>
        </div>
      </div>
    )
  }
}

export default Track;
// In the Track.js - element, add an onClick property with the value set to the this.removeTrack method.
// <a className="Track-action" onClick={this.props.addTrack} onClick={this.props.removeTrack}>{this.renderAction}</a>
