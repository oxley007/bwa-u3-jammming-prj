import React from 'react';
import './SearchResults.css';
import TrackList from '../TrackList/TrackList.js';


class SearchResults extends React.Component {
  render() {
    console.log(this.props.searchResults);
    return (
      <div className="SearchResults">
  <h2>Results</h2>
  <p log={console.log(this.props.searchResults)}></p>
  <TrackList tracks={this.props.searchResults} onAdd={this.props.onAdd} isRemoval={false}/>
</div>
    )
  }
}

export default SearchResults;
