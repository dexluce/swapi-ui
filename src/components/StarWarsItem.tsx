import React, { Component } from 'react';
import { Film, Species, People, Planet, Starship, Vehicle } from '../store/types';

export default class StarWarsItem extends Component<{item: Film | Species | People | Planet | Starship | Vehicle}> {
  render() {
    switch (this.props.item.type) {
      case "People":
        return <li>{this.props.item.name}</li>
      case "Film":
        return <li>{this.props.item.title}</li>
      case "Planet":
        return <li>{this.props.item.name}</li>
      case "Species":
        return <li>{this.props.item.name}</li>
      case "Starship":
        return <li>{this.props.item.name}</li>
      case "Vehicle":
        return <li>{this.props.item.name}</li>
      default:
        return null;
    }
  }
}