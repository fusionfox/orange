import React, { Component } from 'react';
import axios from 'axios'
import './../css/Asset.css';
import Title from './components/Title'
import nasaImageDataAdapter from './utils/nasaImageDataAdapter'

axios.defaults.baseURL = 'https://images-api.nasa.gov'

class Asset extends Component {
  constructor() {
    super()
    this.state = {
      image: {}
    }
  }

  componentDidMount() {
    axios.get(`/search?nasa_id=${this.props.match.params.id}`)
      .then((response) => response.data.collection.items.map(nasaImageDataAdapter))
      .then((data) => this.setState({image: data[0]}))
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    return (
      <div className="Asset">
        <Title className="Asset__Title" text={this.state.image.title} />
        <p className="Asset__Description">{this.state.image.description}</p>
        <img className="Asset__Image" src={this.state.image.large} alt={this.state.image.title} />
      </div>
    );
  }
}

export default Asset;