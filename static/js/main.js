var pokemons = document.querySelectorAll('.pokemon');
var pokImages = document.querySelectorAll('.pokemon img')
var backdrop = document.querySelector('.backdrop');

pokemons.forEach((e, index) => { 
    pokemons[index].addEventListener('click', function () {
        const colorThief = new ColorThief(); 
        const imgPok = new Image();
        imgPok.crossOrigin = 'Anonymous'
        imgPok.src = pokImages[index].src; 
           //aqui se usa a lib ColorThief, para captar a paleta de cores de uma imagem.
           //para usa-la, basta criar uma imagem e passar url ao src 

        setTimeout(() => {
            var bgPok = colorThief.getColor(imgPok);;
              //aqui se pega as cores da img já carregada.

            const pokemon_details = new PokeCard(pokImages[index].src, bgPok);
            pokemon_details.appendTo(document.querySelector('body'));

            backdrop.style.display = 'block';
            backdrop.addEventListener('click', function() {
            backdrop.style.display = 'none';
            pokemon_details.close();
            })
        }, 300)
           //fiz um set timeout, para dar um tempo até a página ser carregada (talvez eu deveria fazer um painel de load xD.)
    }) 
})

