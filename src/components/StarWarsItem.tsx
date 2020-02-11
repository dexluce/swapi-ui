import React, { Component } from 'react';
import { Item } from '../store/types';
import { ListItem, ListItemText, Modal } from '@material-ui/core';
import CSS from 'csstype';

export default class StarWarsItem extends Component<{item: Item}> {
  state = { open: false }
  modalStyle: CSS.Properties = {
    display: 'flex',
    padding: "10px",
    alignItems: 'center',
    justifyContent: 'center',
  };

  modalContentStyle: CSS.Properties = {
    width: "400px",
    backgroundColor: "white",
    border: "solid 1px",
    overflowX: "hidden",
    overflowY: "auto",
  }

  itemStyle: CSS.Properties = {
    textAlign: "center",
    cursor: "pointer",
  }

  displayItemDetails() {
    for (let [key, value] of Object.entries(this.props.item)) {
      console.log(`${key}: ${value}`);
    }
    this.setState({ open: true });
  }

  closeItemDetails() {
    console.log("closeItemDetails");
    this.setState({ open: false });
  }

  toCapitalizedWords(name: string) {
    var words = name.match(/[A-Za-z][a-z]*/g) || [];

    return words.map(this.capitalize).join(" ");
  }

  capitalize(word: string) {
    return word.charAt(0).toUpperCase() + word.substring(1);
  }

  render() {
    return (
      <span>
        <ListItem className="listItem" style={this.itemStyle} onClick={() => this.displayItemDetails()}>
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
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={() => this.closeItemDetails()}
          style={this.modalStyle}
        >
          <div style={this.modalContentStyle}>
            {
              Object.entries(this.props.item).map((entry, index) => {
                return <div key={index}>
                  {this.toCapitalizedWords(entry[0])}: {entry[1]}
                </div>
              })
            }
          </div>
        </Modal>
      </span>
    );
  }
}