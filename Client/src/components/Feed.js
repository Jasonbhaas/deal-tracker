import React, { Component, Fragment } from "react";
import { Container } from "reactstrap";
import { connect } from "react-redux";
import { getItems, deleteItem } from "../actions/itemActions";
import PropTypes from "prop-types";
import ItemCard from "./ItemCard";

class Feed extends Component {
  componentDidMount() {
    console.log("Component mounted");
    this.props.getItems();
  }

  render() {
    const { items } = this.props.item;
    return (
      <Container>
        {items.map(item => (
          <Fragment>
            <ItemCard item={item} />
            <hr />
          </Fragment>
        ))}
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
