from pymongo import MongoClient
from bson.objectid import ObjectId

client = MongoClient('localhost', 27017)

db = client.dealTrackerDev

items = db.items

# result = items.find_one_and_update(
#     {"_id": ObjectId('5ce48b096b242628524b69a1')},
#     {'$set': {'url': 'https://shop.nordstrom.com/s/good-man-brand-kensington-slim-fit-floral-print-cotton-sport-shirt/5139306',
#               'keyword': '_2cY3bT'}})


# for item in items.find():
#     print(item["_id"])


# result = items.update_one(
#     {"_id": '5ce56fe26cb74130fb7553e4'},
#     {'$set': {'url': 'https://shop.nordstrom.com/s/common-projects-original-achilles-sneaker-men/4976450',
#               'keyword': '_2cY3bT'}})

# print(result.matched_count)
# print(result.modified_count)


# # jeans = {
# #     'name': "L'Homme Slim Fit Jeans",
# #     'make': 'Frame',
# #     'image': 'images/jeans.jpeg',
# #     'url': 'https://shop.nordstrom.com/s/frame-lhomme-slim-fit-jeans-bradbury/4770233',
# #     'keyword': '_2cY3bT'
# # }

# # items.insert_one(jeans)

print(items.count)

items.delete_one({"_id": ObjectId("5cef09f41591296f57c4bda2")})

print(items.count)
