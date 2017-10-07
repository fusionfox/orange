import React, { Component } from 'react'
import axios from 'axios'
import './../css/Search.css'
import Title from './components/Title'
import SearchControls from './components/SearchControls'
import ImageGrid from './components/ImageGrid'

axios.defaults.baseURL = 'https://images-api.nasa.gov'

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
      alt: nasaItem.data[0].title,
      href: nasaItem.links[0].href
    })
  }

  searchNasa = (query) => {
    axios.get('/search?q=moon')
      .then((response) => response.data.collection.items.map(this.nasaDataAdapter))
      .then((data) => this.setState({images: data}))
      .catch((error) => {
        console.log(error);
      });
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
