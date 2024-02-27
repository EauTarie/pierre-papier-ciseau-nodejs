function playerRound(playerSelection, computer) {
    let result
    let computerScore
    let playScore
    let player = playerSelection.toLowerCase()
    console.log(player, computer)
    if((player === "pierre" && computer === "papier") || (player === "papier" && computer === "ciseaux") || (player === "ciseaux" && computer === "pierre") || (player === ""))
    {
        result = "T'as perdu.... CHEH !"
        computerScore += 1
    } else if(player === computer) {
        result ="Egalité"
    } else {
        result = "T'as gagné !"
        playScore +=1
    }
    return result
}

module.exports = { playerRound }