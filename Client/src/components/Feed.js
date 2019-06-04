import React, { Component } from "react";
import moment from "moment";
import {
  Container,
  Button,
  Thumbnail,
  Col,
  Row,
  Img,
  ListGroup,
  ListGroupItem
} from "reactstrap";
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
        {items.map(item => [
          <Container>
            <Row>
              <Col sm='6'>
                <div className='thumbnail'>
                  <img src={item.image} className='img-fluid' />
                </div>
              </Col>
              <Col sm={{ size: 5, offset: 1 }}>
                <h1 className='display-3'>{item.name}</h1>
                <h3>{item.make}</h3>
                <ListGroup flush>
                  {item.priceHistory.map(priceLog => [
                    <ListGroupItem>
                      {moment(priceLog.date).format("MMM Do YYYY")}
                      <span className='float-right'>${priceLog.price} </span>
                    </ListGroupItem>
                  ])}
                </ListGroup>
              </Col>
            </Row>
          </Container>,
          <hr />
        ])}
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
