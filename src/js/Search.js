import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './../css/Search.css';

class Search extends Component {
  render() {
    return (
      <div className="Search">
        <h1>Search Page</h1>
        <Link to={'/asset/moon'}>Go to asset 'Moon'</Link>
      </div>
    );
  }
}

export default Search;
