import React, { Component } from 'react';
import './../css/Search.css';
import Title from './components/Title'
import SearchControls from './components/SearchControls'
import ImageGrid from './components/ImageGrid'

class Search extends Component {
  constructor() {
    super()
    this.state = {
      images: 0
    }
  }

  setImages = (string) => {
    this.setState({images: string.length})
  }

  render() {
    return (
      <div className="Search">
        <Title className="Search__Title" text='Search Page' />
        <SearchControls className="Search__Controls" setImages={this.setImages}/>
        <ImageGrid className="Search__ImageGrid" images={this.state.images} />
      </div>
    );
  }
}

export default Search;
