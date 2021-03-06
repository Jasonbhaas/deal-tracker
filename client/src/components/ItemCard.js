import React, { Component } from "react";
import {
  Container,
  Button,
  Col,
  Row,
  ListGroup,
  ListGroupItem
} from "reactstrap";
import moment from "moment";

class ItemCard extends Component {
  render() {
    const pricesAscending = [...this.props.item.priceHistory].sort(
      (a, b) => a.price - b.price
    );
    const highest = pricesAscending[pricesAscending.length - 1] || {
      price: 0,
      date: Date.now()
    };
    const lowest = pricesAscending[0] || { price: 0, date: Date.now() };
    const lastPrice = this.props.item.priceHistory[
      this.props.item.priceHistory.length - 1
    ] || { price: 0, date: Date.now() };

    return (
      <Container>
        <Row>
          <Col sm='6'>
            <div className='thumbnail'>
              <img
                src={this.props.item.image}
                className='img-fluid'
                alt={this.props.item.name}
              />
            </div>
          </Col>
          <Col sm={{ size: 5, offset: 1 }}>
            <h2 className='display-3'>{this.props.item.name}</h2>
            <h4>{this.props.item.make}</h4>
            <ListGroup flush>
              <ListGroupItem>
                Highest ${highest.price.toFixed(2)}
                <span className='float-right'>
                  {moment(highest.date).format("MMM Do YYYY")}
                </span>
              </ListGroupItem>
              <ListGroupItem>
                Lowest ${lowest.price.toFixed(2)}
                <span className='float-right'>
                  {moment(lowest.date).format("MMM Do YYYY")}
                </span>
              </ListGroupItem>
              <ListGroupItem>
                Most Recent $ {lastPrice.price.toFixed(2)}
                <span className='float-right'>
                  {moment(lastPrice.date).format("MMM Do YYYY")}
                </span>
              </ListGroupItem>
            </ListGroup>
            <Button
              className='btn-success mt-3 btn-lg btn-block'
              href={this.props.item.url}
            >
              Buy Now
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ItemCard;
