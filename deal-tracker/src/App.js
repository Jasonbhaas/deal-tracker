import React from 'react';
import './App.css';
import { read } from 'fs';

//test comment

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
    image: '/images/shirt.jpeg'
  }
]

class App extends React.Component {
  render() {
    return (
      <div className="container mt-4">
        <Feed></Feed>
      </div>
    )
  }
}


class Feed extends React.Component {
  render() {
    const Cards = products.map((x) => {
      return (
        <li>
          <ProductCard product={x} />
        </li>
      )
    });
    return (
      <ul>
        {Cards}
      </ul>
    );
  }
}

class ProductCard extends React.Component {
  render() {
    return (
      <div className="row card mt-3">
        <div className="col-md-5 item-pic">
          <img src={this.props.product.image} width='250px' />
        </div>
        <div className="col-md-7 item-desc">
          <h2>{this.props.product.name}</h2>
          <h3>{this.props.product.brand}</h3>
          <ul><li>${this.props.product.price}</li></ul>
        </div>
      </div>
    );
  }
}

export default App;
