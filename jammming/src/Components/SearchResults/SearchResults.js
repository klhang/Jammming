import React from 'react';
import './SearchBar.css';
import TrackList from '../TrackList/TrackList';

class SearchResults extends React.Component{
  render(){
    return(
      <div>
        <TrackList tracks={this.props.searchResults} onAdd={this.props.onAdd}/>
      </div>
    )
  }
}

export default SearchResults;
