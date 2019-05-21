import React, { Component } from "react";
import { ListGroupItem } from "reactstrap";

class ItemCard extends Component {
  render() {
    return (
      <ListGroupItem>
        {this.props.product.name}
        <br />
        {this.props.product.make}
      </ListGroupItem>
    );
  }
}

export default ItemCard;
