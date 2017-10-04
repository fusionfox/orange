import React, { Component } from 'react';
import './../css/Asset.css';
import Title from './components/Title'

class Asset extends Component {
  render() {
    return (
      <div className="Asset">
        <Title text='Asset Page' />
        <p>Asset: {this.props.match.params.id}</p>
      </div>
    );
  }
}

export default Asset;
