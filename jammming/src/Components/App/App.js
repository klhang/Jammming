import './App.css';

render(){
  return(
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <!-- Add a SearchBar component -->
        <SearchBar />
        <div className="App-playlist">
          <!-- Add a SearchResults component -->
          <SearchResults />
          <!-- Add a Playlist component -->
          <Playlist />
        </div>
      </div>
    </div>
  )
  }
}
