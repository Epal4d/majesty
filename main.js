import { database } from "./data.js"
import { payTribute } from "./tributes.js"
import { createQueen } from "./queens.js"
import { hailTheQueen } from "./queens.js"
import { giveTribute } from "./tributes.js"


/*
    Define a function with a single parameter. When the function
    is invoked, an argument is required.
*/

const queens = database.queens
const tributes = database.tributeChest

payTribute(1, "Barrel of wine", 2)
payTribute(2, "Silk", 1)
payTribute(3, "Bushel of oranges", 3)
payTribute(4, "Ten gold coins", 1)


createQueen(1, "Trinity Terry")
createQueen(2, "Kaile Alford")
createQueen(3, "Melissa Alford")



 giveTribute() 