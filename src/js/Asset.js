import React, { Component } from 'react';
import axios from 'axios'
import './../css/Asset.css';
import Title from './components/Title'

axios.defaults.baseURL = 'https://images-api.nasa.gov'

class Asset extends Component {
  constructor() {
    super()
    this.state = {
      image: {}
    }
  }

  nasaImageDataAdapter = (nasaImage) => {
    const id = nasaImage.data[0].nasa_id

    return ({
      id: id,
      title: nasaImage.data[0].title,
      description: nasaImage.data[0].description,
      href: `https://images-assets.nasa.gov/image/${id}/${id}~large.jpg`
    })
  }

  componentDidMount() {
    axios.get(`/search?nasa_id=${this.props.match.params.id}`)
      .then((response) => response.data.collection.items.map(this.nasaImageDataAdapter))
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
        <img className="Asset__Image" src={this.state.image.href} alt={this.state.image.title} />
      </div>
    );
  }
}

export default Asset;
