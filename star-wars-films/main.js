import {films } from '../data/films.js'
import {people} from '../data/people.js'

const main = document.querySelector('main')



for(let step = 0; step<7; step++) {
    let figure = document.createElement('figure')
    let newImg = document.createElement('img')
    newImg.src = `https://starwars-visualguide.com/assets/img/films/${step + 1}.jpg`
    
    main.appendChild(newImg)
    console.log(films[step].title);
}
    



/*for (const film of films) {
    let newImg = document.createElement('img')
    newImg.src = 'https://starwars-visualguide.com/assets/img/films/2.jpg'
    
    main.appendChild(newImg)
    console.log(film.title);
}

films.forEach(film=> {
    let newParagraph = document.body.appendChild(document.createElement('p'))
    newParagraph.textContent = film.name
})*/

