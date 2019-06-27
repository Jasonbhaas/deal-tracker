import requests
import pprint

from bs4 import BeautifulSoup


def get_price(url, keyword):
    page = requests.get(url)
    soup = BeautifulSoup(page.content, 'html.parser')
    price = soup.find('span', attrs={'class': keyword}).get_text()
    price = price.replace("$", "")
    return price
