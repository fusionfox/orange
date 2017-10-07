import React, { Component } from 'react';
import './../css/Search.css';
import Title from './components/Title'
import SearchControls from './components/SearchControls'
import ImageGrid from './components/ImageGrid'

class Search extends Component {
  constructor() {
    super()
    this.state = {
      images: []
    }
  }

  nasaDataAdapter = (nasaItem) => {
    return ({
      id: nasaItem.data[0].nasa_id,
      href: nasaItem.links[0].href
    })
  }

  searchNasa = (query) => {
    const stub = require('../nasa-stub-data.json')
    const data = stub.collection.items.map(this.nasaDataAdapter)
    this.setState({images: data})
  }

  render() {
    return (
      <div className="Search">
        <Title className="Search__Title" text='Search Page' />
        <SearchControls className="Search__Controls" performSearch={this.searchNasa}/>
        <ImageGrid className="Search__ImageGrid" images={this.state.images} />
      </div>
    );
  }
}

export default Search;
