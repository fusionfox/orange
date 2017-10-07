import React, { Component } from 'react'
import axios from 'axios'
import './../css/Search.css'
import './../css/components/SearchControls.css'
import Title from './components/Title'
import ImageGrid from './components/ImageGrid'
import nasaImageDataAdapter from './utils/nasaImageDataAdapter'

axios.defaults.baseURL = 'https://images-api.nasa.gov'

class Search extends Component {
  constructor() {
    super()
    this.state = {
      images: [],
      media_type: 'image'
    }
  }

  searchNasa = (query) => {
    axios.get(`/search?q=${query}&media_type=${this.state.media_type}`)
      .then((response) => response.data.collection.items.map(nasaImageDataAdapter))
      .then((data) => this.setState({images: data}))
      .catch((error) => {
        console.log(error);
      });
  }

  handleKeyUp = (e) => {
    if (e.key === 'Enter') {
      this.searchNasa(e.target.value)
    }
  }

  handleRadioChange = (e) => {
    this.setState({
      media_type: e.target.value,
    })
  }

  render() {
    return (
      <div className="Search">
        <Title className="Search__Title" text='Search Page' />
        <div className='Search__Controls SearchControls'>
          <div className='SearchControls__query'>
            <input type='text' placeholder= 'Input query then press Enter' onKeyUp={this.handleKeyUp} />
          </div>
          <div className='SearchControls__filters'>
            <label>
              <input type='radio' name='media_type' value='image' checked={this.state.media_type === 'image'} onChange={this.handleRadioChange} />
              Images
            </label>
            <label>
              <input type='radio' name='media_type' value='audio' checked={this.state.media_type === 'audio'} onChange={this.handleRadioChange} />
              Audio
            </label>
          </div>
        </div>
        <ImageGrid className="Search__ImageGrid" images={this.state.images} />
      </div>
    );
  }
}

export default Search;
