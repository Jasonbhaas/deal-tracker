import requests
from bson.objectid import ObjectId
import pprint
import datetime

url = "http://localhost:5000"

items = requests.get()


client = MongoClient(url)
items = client.dev.items

hiker_cursor = items.find({'name': "Terrex Free Hiker"})

pprint.pprint(items.find_one({'name': "Terrex Free Hiker"})['make'])
