from pymongo import MongoClient
from pymongo import InsertOne, DeleteMany, ReplaceOne, UpdateOne
from bson.objectid import ObjectId
from scraper import get_price
import pprint
import datetime


if __name__ == "__main__":
    url = "mongodb+srv://jason:jason123@cluster0-5lvli.mongodb.net/dev?retryWrites=true&w=majority"

    client = MongoClient(url)
    items = client.dev.items

    for item in items.find():
        try:
            price = get_price(item['url'], item['keyword'])
            print(price)
            items.update_one({'_id': item['_id']},
                             {'$push': {'priceHistory': {'price': float(price),
                                                         'date': datetime.datetime.today()}}})
        except:
            print("error!")
