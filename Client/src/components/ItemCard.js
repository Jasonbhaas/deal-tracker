import React, { Component } from "react";
import { ListGroupItem } from "reactstrap";

class ItemCard extends Component {
  render() {
    return (
      <ListGroupItem>
        {this.props.product.name}
        <hr />
        {this.props.product.make}
        <img src={`/${this.props.product.image}`} />
      </ListGroupItem>
    );
  }
}

export default ItemCard;
