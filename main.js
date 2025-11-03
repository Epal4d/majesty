/*
    Define a function with a single parameter. When the function
    is invoked, an argument is required.
*/
const queens = []

const createQueen = (queenId,queenName) => {
    const queenObject = {
        id: queenId,
        name:queenName
    }

    queens.push(queenObject)
}

createQueen(1, "Trinity Terry")
createQueen(2, "Kaile Alford")
createQueen(3, "Melissa Alford")

const hailTheQueen = (nameString) => {
    return `Hail Her Majesty, ${nameString}.`  // This function returns a string
}

const athena = hailTheQueen("Athena Perez") // Argument value is "Athena Perez"
const charisse = hailTheQueen("Charisse Ford") // Argument value is "Charisse Ford"
const jenna = hailTheQueen("Jenna Solis") // Argument value is "Jenna Solis"

console.log(charisse)
console.log(jenna)
console.log(athena)
