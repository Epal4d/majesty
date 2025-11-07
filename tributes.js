import { database } from "./data.js"

const tributes = database.tributeChest
const queens = database.queens

export const payTribute = (tributeId,tributeDescription,queenId) => {
    const tributeObject = {
        id: tributeId,
        description:tributeDescription,
        queenId: queenId
    }
    tributes.push(tributeObject)
}

export const giveTribute = () => {
    for (const queen of queens) {
    
    for (const tribute of tributes) {
        if(tribute.queenId === queen.id) {
            console.log(`${queen.name} has tribute ${tribute.description}`)
        }
    }
    }
}
giveTribute = (tributes,queens) => {
 
}