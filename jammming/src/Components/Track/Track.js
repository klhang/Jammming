import React from 'react';
import './Track.css';

class Track extends React.Component{
  constructor(props){
    super(props);
    this.addTrack = this.addTrack.bind(this);
  }

  addTrack(){
    this.props.onAdd(this.props.track);
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
          <h3><!-- track name will go here -->{this.props.track.name}</h3>
          <p><!-- track artist will go here-->{this.props.track.artist} | {this.props.track.album}<!-- track album will go here --></p>
        </div>
        <a className="Track-action" onClick={this.props.addTrack}>{this.renderAction}</a>
      </div>
    )
  }
}