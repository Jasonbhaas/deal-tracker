'use strict';

const e = React.createElement;

var products = [
    {
        name: "Achilles Low Top",
        brand: "Commong Projects",
        price: 400,
        image: "images/shoes.jpeg"
    },
    {
        name: "Kensington Slim Fit Floral Print Cotton Sport Shirt",
        brand: "Good Man Brand",
        price: 168,
        image: "images/shoes.jpeg"
    }
]

class Test extends React.Component {
    render() {
        return (
            <h1> Hellow world! </h1>
        );
    }
}

class Feed extends React.Component {
    render() {
        const Cards = products.map((x) => {
            return (
                <ProductCard product={x} />)
        });
        return (
            { Cards }
        );
    }
}

class ProductCard extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-5 item-pic">
                    <img src={props.image} />
                </div>
                <div className="col-md-7 item-desc">
                    <h2>{props.name}</h2>
                    <h3>{props.brand}</h3>
                    <ul><li>${props.price}</li></ul>
                </div>
            </div>
        );
    }
}


const domContainer = document.querySelector('#product-feed');
ReactDOM.render(e(Feed), domContainer);