from pymongo import MongoClient

url = "mongodb+srv://jason:jason123@cluster0-5lvli.mongodb.net/dev?retryWrites=true&w=majority"

client = MongoClient(url)
itemsCollection = client.dev.items

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
},
    {
    "name": "Peruvian Pima Cotton Robe",
    "make": "Daniel Buchler",
    "image": "images/robe.jpeg",
    "url": "https://shop.nordstrom.com/s/daniel-buchler-peruvian-pima-cotton-robe/3675851",
    "keyword": "_2cY3bT"
}]

if __name__ == "__main__":
    itemsCollection.delete_many({})
    itemsCollection.insert_many(items)
