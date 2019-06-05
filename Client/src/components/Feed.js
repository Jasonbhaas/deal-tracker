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
                  <ListGroupItem>
                    Highest $
                    {Math.max(
                      ...item.priceHistory.map(priceLog => priceLog.price)
                    )}
                  </ListGroupItem>
                  <ListGroupItem>
                    Lowest $
                    {Math.min(
                      ...item.priceHistory.map(priceLog => priceLog.price)
                    )}
                  </ListGroupItem>
                  <ListGroupItem>
                    Most Recent $
                    {
                      item.priceHistory.sort(function(a, b) {
                        return b.date - a.date;
                      })[0].price
                    }
                    <span className='float-right'>
                      {moment(
                        item.priceHistory.sort(function(a, b) {
                          return b.date - a.date;
                        }).date
                      ).format("MMM Do YYYY")}
                    </span>
                  </ListGroupItem>
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
