from flask import Flask, render_template
from static.python.getJson import getPokemons

app = Flask(__name__)
 
@app.route('/')
def index():
    pokemons = getPokemons()
    return render_template('index.html', pokemons=pokemons)

if __name__ == '__main__':
    app.run(debug = True)

