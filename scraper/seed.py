from pymongo import MongoClient
items = [{
    "name": "Achilles Low",
    "make": "Common Projects",
    "image": "images/shoes.jpeg",
    "url": "https://shop.nordstrom.com/s/common-projects-original-achilles-sneaker-men/4976450",
    "keyword": "_2cY3bT"
},
    {
    "name": "Kensington Slim Fit Floral Print Cotton Sport Shirt",
    "make": "Good Man Brand",
    "image": "images/shirt.jpeg",
    "url": "https://shop.nordstrom.com/s/good-man-brand-kensington-slim-fit-floral-print-cotton-sport-shirt/5139306",
    "keyword": "_2cY3bT"
},
    {
    "name": "L'Homme Slim Fit Jeans",
    "make": "Frame",
    "image": "images/jeans.jpeg",
    "url": "https://shop.nordstrom.com/s/frame-lhomme-slim-fit-jeans-bradbury/4770233",
    "keyword": "_2cY3bT",
}]

client = MongoClient('localhost', 27017)

db = client.dealTrackerDev

db['items'].insert_many(items)
