from pymongo import MongoClient
from pymongo import InsertOne, DeleteMany, ReplaceOne, UpdateOne
from bson.objectid import ObjectId
from scraper import get_price
import pprint

url = "mongodb+srv://jason:jason123@cluster0-5lvli.mongodb.net/dev?retryWrites=true&w=majority"

client = MongoClient(url)
# db = client.dealTrackerDev
items = client.dev.items
batch = []

for item in items.find():
    pprint.pprint(item['name'])

# for item in items.find():
#     try:
#         price = get_price(item['url'], item['keyword'])
#         print(price)
#         items.update_one({'_id': item['_id']},
#                          {'$push': {'priceHistory': {'price': float(price)}}})
#     except:
#         print("error!")

# batch.append(UpdateOne({'_id': item['_id']}, {
    #     '$push': {'priceHistory': price}}))
# try:
#     res = db.test.bulk_write(batch, ordered=False)
#     print("supposedly executed wihtout error")
# except:
#     print("error bulk writing")
