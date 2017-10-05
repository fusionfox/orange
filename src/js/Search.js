import React, { Component } from 'react';
import './../css/Search.css';
import Title from './components/Title'
import SearchControls from './components/SearchControls'

class Search extends Component {
  render() {
    return (
      <div className="Search">
        <Title className="Search__Title" text='Search Page' />
        <SearchControls className="Search__Controls" />
      </div>
    );
  }
}

export default Search;
