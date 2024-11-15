const { database } = require("./database.js")

const hireDrovers = (herdSize) => {
    const drovers = []
    const allDrovers = database.drovers
    const numberNeeded = herdSize / 10

    let herderIdsChosen = []
    for (let counter = 0; counter < numberNeeded; counter++) {
        do {
            //assumes herder IDs are consecutive integers starting at 0
            randomHerderId = Math.floor(Math.random() * allDrovers.length)
        } while (herderIdsChosen.includes(randomHerderId)) //don't allow duplicates
        drovers.push(allDrovers[randomHerderId])
        herderIdsChosen.push(randomHerderId) //use a separate array because the 
    }                                        //`includes` function only works with primitive data types
    return drovers
}

module.exports = { hireDrovers }