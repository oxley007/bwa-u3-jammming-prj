import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {term: ''};
    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }


  search() {
    console.log(this.state.term);
    let term = this.state.term
    console.log(term);
    this.props.onSearch(term);
  }

  handleTermChange(e) {
    //this.props.spotifyToken();
    console.log(this.state.term);
    this.setState({term: e.target.value});
  }

  /*handleSearch(e) {
    //this.props.getAccessToken();
    console.log('does this show?');
    this.props.search(this.state.term);
    e.preventDefault();
  }*/

  render() {
    return (
      <div className="SearchBar">
  <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange}/>
  <a onClick={this.search}>SEARCH</a>
</div>
    )
  }
}

export default SearchBar;
