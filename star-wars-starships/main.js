import { starships } from '../data/starships.js'

const nav = document.querySelector('.nav')
const navList = document.querySelector('.navList')
const sihpView = document.querySelector('.main')

function populateNav (starships) {
    starships.forEach(starships=> {
        let anchorWrap = document.createElement('a')
        anchorWrap.href = '#'
        anchorWrap.addEventListener('click', event => {
            let shipName = event.target.textContent
            const foundShip = starships.find(ship => ship.name === shipName)
            populateShipView (foundShip)
        })

        let listItem = document.createElement('li')
        listItem.textContent = starship.name
    
        anchorWrap.appendChild(listItem)
        navList.appendChild(anchorWrap)
        nav.appendChild(navList)
})
}

function populateShipView(shipData) {
   removeChildren (shipView)
    let shipImage = document.createElement('img')
    shipNum = getLastNumber(shipData.url)
    shipImage.src = 'https://starwars-visualguide.com/assets/img/starships/15.jpg'
    
    shipView.appendChild(shipImage)

}

populateNav(starships)


