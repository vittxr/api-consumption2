import requests

def getPokemons():
    res = requests.get('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0.')
    return res.json()

#print(getPokemons().json())