import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './../css/Search.css';
import Title from './components/Title'

class Search extends Component {
  render() {
    return (
      <div className="Search">
        <Title text='Search Page' />
        <Link to={'/asset/moon'}>Go to asset 'Moon'</Link>
      </div>
    );
  }
}

export default Search;