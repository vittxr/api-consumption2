class PokeCard {
    constructor(image, bg) {
        //container:
        this.div = document.createElement('div');
        this.div.setAttribute('class', 'pokemon_details');
        this.div.classList.add('class', 'slide-in-fwd-center')

        //image:
        let box_pokImage = document.createElement('div');
        box_pokImage.setAttribute('class', 'pokemon-image');
        box_pokImage.setAttribute('class', 'box-pokImage');
        box_pokImage.style.background = "rgba(" + bg[0]+"," + bg[1] +"," + bg[2] +","+ 1 +")";
        
        let pokImage = document.createElement('img');
        pokImage.setAttribute('src', image);
        pokImage.setAttribute('class', 'pokImage');
        
        box_pokImage.append(pokImage);
        this.div.append(box_pokImage);

        //habilidades:
    }
 
    appendTo(target) {
       target.append(this.div);
    }

    close() {
       this.div.remove();
    }
}