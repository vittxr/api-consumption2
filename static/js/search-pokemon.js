let pokemon = document.querySelectorAll(".pokemon");
let pokeToFind = document.querySelector(".search-box__input");
let poke_list = document.querySelectorAll(".pokemon-name");
let search_btn = document.querySelector(".search-box__icon");
let target = document.querySelector(".search-box a");

search_btn.addEventListener("click", searchPoke)

function searchPoke() {
    var pokeIsFound = false;
       //se o pokemon for encontrado, essa variável recebe true. Caso contrário, não; ou seja, retorna um alert de erro ao usuário.

    for(i=0; i < poke_list.length; i++) {
        //para encontrar o pokemon, percorre-se toda a lista com o nome dos pokemons. Quando o valor inputado for igual ao do pokemon na iteração, faz uma âncora para o usuário ir ao pokemon especificado.
        //o <a> não leva ao pokemom precisamente, tentar deixar isso melhor.
        if (pokeToFind.value == poke_list[i].innerText) {
            pokeIsFound = true;
            let targetPoke = pokemon[i]

            targetPoke.scrollIntoView({
                //scrollIntoView é uma função que move o elemento especificado para a área visível do navegador. Existem algumas opções adicionais interessantes no site do mozilla acerta desse método 
                block: "center",
                //behavior: "smooth",
            })

            //animação:
            targetPoke.classList.add('found-animation')
            setTimeout(() => {
                targetPoke.classList.remove('found-animation')
                //depois que animação acabar, remove-se ela, para que possar se adicionada novamente se necessário.
            }, 1100)
        }
    }
    
    if (!pokeIsFound) {
       alert("O pokemon não foi encontrado. :/")
    }
}

