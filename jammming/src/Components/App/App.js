import './App.css';
import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      searchResults:[
        {name:'',
        artist:'',
        album:''}
      ],
      playlistName: '',
      playlistTracks: [
        {name:'',
        artist:'',
        album:''}
      ]
    }
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  updatePlaylistName(name){
    this.setState({playlistName: name})
  }

  addTrack(track){
    if(this.state.playlistTracks.any(existingTrack => existingTrack.id === track.id)){
      let newState = this.state.playlistTracks.push(track);
      this.setState({playlistTracks: newState})
    }
  }

  removeTrack(track){
    this.state.playlistTracks.forEach(existingTrack =>{
      if(existingTrack.id === track.id){
        let index = this.state.playlistTracks.indexOf(existingTrack);
        let newState = this.state.playlistTracks.slice(index, 1);
        this.setState({playlistTracks: newState});
      }
    })
  }
  //Generates an array of uri values called trackURIs from the playlistTracks property.
  savePlaylist(){
    // return [trackURIs, ]
  }

  search(term){
    console.log(term)
  }

  render(){
    return(
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search}/>

          <div className="App-playlist">
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}/>
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
