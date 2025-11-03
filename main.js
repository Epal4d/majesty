/*
    Define a function with a single parameter. When the function
    is invoked, an argument is required.
*/
const queens = []
const tributeChest = []

const payTribute = (tributeId,tributeDescription,queenId) => {
    const tributeObject = {
        id: tributeId,
        description:tributeDescription,
        queenId: queenId
    }
    tributeChest.push(tributeObject)
}

payTribute(1, "Barrel of wine", 2)
payTribute(2, "Silk", 1)
payTribute(3, "Bushel of oranges", 3)
payTribute(4, "Ten gold coins", 1)

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


for (const queen of queens) {
    
    for (const tribute of tributeChest) {
        if(tribute.queenId === queen.id) {
            console.log(`${queen.name} has tribute ${tribute.description}`)
        }
    }
    
}