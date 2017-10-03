import React, { Component } from 'react';
import './../css/Asset.css';

class Asset extends Component {
  render() {
    return (
      <div className="Asset">
        <h1>Asset Page</h1>
        <p>Asset: {this.props.match.params.id}</p>
      </div>
    );
  }
}

export default Asset;
