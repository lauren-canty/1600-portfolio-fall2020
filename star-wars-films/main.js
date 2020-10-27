import {films } from './data/films.js'
import {people} from '.data/people.js'

//console.log(people.length)
//console.log(films[0])



/*people.forEach(fperson => {
    let newParagraph = document.body.appendChild(document.createElement('p'))
    newParagraph.textContent = person.name
    
})*/
for(let step = 0; step<7; step++) {
for (const film of films) {
    let figure = document.createElement('figure')
    let figImg = document.createElement('img')
    let figcaption = document.createElement('figcaption')
    newImg.src =  `https://starwars-visualguide.com/#/`
    figcaption.textContent = films[step]
    
    figure.appendChild
    
    

    main.appendChild(newimg)
}}


for(let step = 0; step<7; step++){
    console.log(films[step].title);
}