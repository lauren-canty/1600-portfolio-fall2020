import { senators } from '../data/senators'
import {removeChildren } from '../utils/index.js'

const senatorGrid = document.querySelector('.senatorGrid')

function populateSenatorDiv(simpleSenators) {
    removeChildren(senatorGrid)
    simpleSenators.forEach(senator => {
        let senDiv = document.createElement('figure')
        let senFigure = document.createElement('figure')
        let figImg = document.createElement('img')
        let figCaption = document.createElement('figcaption')
        let partyIcon = document.createElement('i')
        if (senator.party === 'R') partyIcon.className = 'fas fa-republican'
        if (senator.party === 'D') partyIcon.className = 'fas fa-democrat'
        if (senator.party === 'ID') partyIcon.className = 'fas fa-star'
        figImg.src = senator.imgURL 
        figCaption.textContent = senator.name

        figCaption.appendChild(partyIcon)
        senFigure.appendChild(figImg)
        senFigure.appendChild(figCaption)
        senDiv.appendChild(senFigure)
        senDiv.appendChild(progressBars(senator))
        senatorGrid.appendChild(senDiv)
        
    })
}

function getSimplifiedSenators(senatorArray){
    return senatorArray.map(senator => {
        let middleName = senator.middle_name ? ` ${senator.middle_name}` : ` `
        return {
            id: senator.id,
        
        }
    })
}