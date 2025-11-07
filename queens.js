import { database } from "./data.js"

const queens = database.queens

export const createQueen = (queenId,queenName) => {
    const queenObject = {
        id: queenId,
        name:queenName
    }

    queens.push(queenObject)
}

export const hailTheQueen = (nameString) => {
    return `Hail Her Majesty, ${nameString}.`  // This function returns a string
}