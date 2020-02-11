import React, { Component } from 'react';
import { Film, Species, People, Planet, Starship, Vehicle } from '../store/types';
import { ListItem, ListItemText } from '@material-ui/core';

export default class StarWarsItem extends Component<{item: Film | Species | People | Planet | Starship | Vehicle}> {
  render() {
    return (
      <ListItem style={{textAlign: "center"}}>
        {(() => {
          switch (this.props.item.type) {
            case "People":
              return (<ListItemText>{this.props.item.name}</ListItemText>);
            case "Film":
              return (<ListItemText>{this.props.item.title}</ListItemText>);
            case "Planet":
              return (<ListItemText>{this.props.item.name}</ListItemText>);
            case "Species":
              return (<ListItemText>{this.props.item.name}</ListItemText>);
            case "Starship":
              return (<ListItemText>{this.props.item.name}</ListItemText>);
            case "Vehicle":
              return (<ListItemText>{this.props.item.name}</ListItemText>);
            default:
              return null;
          }
        })()}
      </ListItem>
    );
  }
}