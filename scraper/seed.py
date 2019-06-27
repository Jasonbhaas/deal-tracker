from pymongo import MongoClient
import datetime

url = "mongodb+srv://jason:jason123@cluster0-5lvli.mongodb.net/dev?retryWrites=true&w=majority"

client = MongoClient(url)
itemsCollection = client.dev.items

items = [{
    "name": "Achilles Low",
    "make": "Common Projects",
    "image": "images/shoes.jpeg",
    "url": "https://www.mrporter.com/en-us/mens/product/common_projects/original-achilles-leather-sneakers/903868",
    "keyword": "product-details__price--value",
    "date": datetime.datetime.now()
},
    {
    "name": "Kensington Slim Fit Floral Print Cotton Sport Shirt",
    "make": "Good Man Brand",
    "image": "images/shirt.jpeg",
    "url": "https://shop.nordstrom.com/s/good-man-brand-kensington-slim-fit-floral-print-cotton-sport-shirt/5139306",
    "keyword": "Z1WEo3w",
    "date": datetime.datetime.now()
},
    {
    "name": "L'Homme Slim Fit Jeans",
    "make": "Frame",
    "image": "images/jeans.jpeg",
    "url": "https://shop.nordstrom.com/s/frame-lhomme-slim-fit-jeans-bradbury/4770233",
    "keyword": "Z1WEo3w",
    "date": datetime.datetime.now()
},
    {
    "name": "Peruvian Pima Cotton Robe",
    "make": "Daniel Buchler",
    "image": "images/robe.jpeg",
    "url": "https://shop.nordstrom.com/s/daniel-buchler-peruvian-pima-cotton-robe/3675851",
    "keyword": "Z1WEo3w",
    "date": datetime.datetime.now()
},
    {
    "name": "Terrex Free Hiker",
    "make": "Adidas",
    "image": "images/hiker.jpeg",
    "url": "https://shop.nordstrom.com/s/adidas-outdoor-terrex-free-hiker-cr-hiking-shoe-men/5158017",
    "keyword": "Z1WEo3w",
    "date": datetime.datetime.now()
}]

if __name__ == "__main__":
    itemsCollection.delete_many({})
    itemsCollection.insert_many(items)
