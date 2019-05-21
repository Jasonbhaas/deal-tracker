import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { connect } from "react-redux";
import { getItems, deleteItem } from "../actions/itemActions";
import PropTypes from "prop-types";
import ItemCard from "./ItemCard";

var products = [
  {
    name: "Achilles Low Top",
    brand: "Commong Projects",
    price: 400,
    image: "/images/shoes.jpeg"
  },
  {
    name: "Kensington Slim Fit Floral Print Cotton Sport Shirt",
    brand: "Good Man Brand",
    price: 168,
    image: "/images/shirt.jpeg"
  }
];

class Feed extends Component {
  componentDidMount() {
    console.log("Component mounted");
    this.props.getItems();
  }

  render() {
    const { items } = this.props.item;
    return (
      <Container>
        <ListGroup>
          {items.map(item => (
            <ItemCard product={item} />
          ))}
        </ListGroup>
      </Container>
    );
  }
}

Feed.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  item: state.item
});

export default connect(
  mapStateToProps,
  { getItems, deleteItem }
)(Feed);
