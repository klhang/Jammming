import './App.css';
import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      searchResults:[
        {name:,
        artist:,
        album:}
      ],
      playlistName: '',
      playlistTracks: [
        {name:,
        artist:,
        album:}
      ]
    }
    this.addTrack = this.addTrack.bind(this);
  }

  addTrack(track){
    if(playlistTracks.any(existingTrack => existingTrack.id === track.id)){
      track.push(this.state.playlistTracks);
    }
  }

  render(){
    return(
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />

          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}/>
          </div>
        </div>
      </div>
    )
  }
}
