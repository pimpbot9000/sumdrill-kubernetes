import requests
import os
URL = os.environ["URL"]
API_KEY = os.environ["API_KEY"]
headers = {'X-API-Key': API_KEY}
r = requests.delete(URL, headers=headers)
