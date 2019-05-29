import requests

from bs4 import BeautifulSoup

URL = "https://frame-store.com/products/lhomme-slim-noir"
page = requests.get(URL)
frame_price_tag = "list-price"

soup_frame = BeautifulSoup(page.content, 'html.parser')
price_frame = soup_frame.find(
    'span', attrs={'class': frame_price_tag}).get_text()

print(price_frame)
# price = soup.find('td', attrs={'class': 'priceBlockBuyingPriceString'})
# print(price)


#res = requests.get('https://frame-store.com/products/lhomme-slim-noir')


# frame_slim = "https://shop.nordstrom.com/s/frame-lhomme-slim-fit-jeans-bradbury/4770233"

# frame_skinny = "https://shop.nordstrom.com/s/frame-lhomme-skinny-fit-jeans-bradbury/5217022"


# page_slim = urlopen(frame_slim)
# page_skinny = urlopen(frame_skinny)

# soup_slim = BeautifulSoup(page_slim, 'html.parser')
# soup_skinny = BeautifulSoup(page_skinny, 'html.parser')

# price_slim = soup_slim.find('span', attrs={'class': '_2cY3bT'})
# price_skinny = soup_skinny.find('span', attrs={'class': '_2cY3bT'})

# print(price_slim)
# print(price_skinny)


# frame_url = "https://frame-store.com/products/lhomme-slim-noir"

# page_frame = urlopen(frame_url)
# soup_frame = BeautifulSoup(page_frame, 'html.parser')

# price_frame = soup_frame.find('span', attrs={'class': frame_price_tag})

# print(price_frame)

# amazon_homepage = urlopen('https://www.amazon.com')


# amazon_socks_url = "https://www.amazon.com/gp/product/B078W6KSL3/?th=1&psc=1"
# amazon_socks_page = urlopen(amazon_socks_url)

# amazon_socks_soup = BeautifulSoup(amazon_socks_page, 'html.parser')
# amazon_socks_price = amazon_socks_soup.find(
#     'span', attrs={'id': 'priceblock_ourprice'})

# print(amazon_socks_price)
