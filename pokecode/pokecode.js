//reusable async function to fetch data from the provided url
async function getAPIData(url) {
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (error){
        console.error(error)

    }
}

// now, use the async get SPIData function
function loadPage() {
    getAPIData (`https://pokeapi.co/api/v2/pokemon`).then
        (async (data) => {
        for (const pokemon of data.results) {
            await getAPIData(pokemon.url).then((pokeData)=>{
                console.log(pokeData)
                populatePokeCard(pokeData)
            })
        }
    })
}

const pokemonGrid = document.querySelector('.pokemonGrid')
const mudsDaleButton = document.querySelector('button')
///mudsDaleButton.addEventListener('click', () => {
   /// getAPIData(`https://pokeapi.co/api/v2/pokemon`)
///})

///let pokemonGrid = document.querySelector('.pokemonGrid')

function populatePokeCard(pokemon){
    let pokeScene = document.createElement('div')
    pokeScene.className = 'scene'
    let pokeCard = document.createElement('div')
    pokeCard.className = 'card'
    pokeCard.addEventListener('click', () =>{
        console.log('You Clicked on ${pokemon.name}')
    })
   
   
    pokeCard.appendChild(populateCardFront(pokemon))
    pokeCard.appendChild(populateCardBack(pokemon))
    pokeScene.appendChild(pokeCard)
    pokemonGrid.appenfChild(pokeScene)
}

function populateCardFront(pokemon){
    let cardFront = document.createElement('div')
    cardFront.className='card__face card__face--front'
    let frontLabel = document.createElement('p')
    let frontImage = document.createElement('img')
    frontLabel.textContent = pokemon.name
    frontImage.src = `../images/pokemon/00${pokemon}.png`
    cardFront.appendChild(frontImage)  
    cardFront.appendChild(frontLabel)
    return  cardFront

}

function populateCardBack(pokemon) {
    let cardBack = document.createElement('div')
    cardBack.className='card__face card__face--back'
    let backLabel = document.createElement('p')
    backLabel.textContent = `I'm the back of the card`
    cardBack.appendChild (backLabel)
    return cardBack

}

function getImageFileName(pokemon){
    if (pokemon.id<10) {
        return `00${pokemon.id}`
    } else if (pokemon.id > 9 && pokemon.id<99) {
        return `0${pokemon.id}`
    }
}
loadPage()