from pymongo import MongoClient
from pymongo import InsertOne, DeleteMany, ReplaceOne, UpdateOne
from bson.objectid import ObjectId
from scraper import get_price
import pprint

client = MongoClient('localhost', 27017)
db = client.dealTrackerDev
items = db.items
batch = []


for item in items.find():
    try:
        price = get_price(item['url'], item['keyword'])
        items.update_one({'_id': item['_id']},
                         {
            '$push': {'priceHistory': {'price': float(price)}}})

    except:
        print("error!")

# batch.append(UpdateOne({'_id': item['_id']}, {
        #     '$push': {'priceHistory': price}}))
# try:
#     res = db.test.bulk_write(batch, ordered=False)
#     print("supposedly executed wihtout error")
# except:
#     print("error bulk writing")
