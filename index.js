const computer = require('./computer')
const score = require('./score')
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
const express = require('express')
const app = express()
const port = 3000

// function game() {
//         readline.question("Saisissez un coup\n>", coup => {
//             const computerChoice = computer.getComputerChoice();
//             console.log(`Vous avez choisi : ${coup}, l'ordinateur a choisi ${computerChoice}`)
//             console.log(score.playerRound(coup, computerChoice));
//             readline.close()
//         })
//   }
  
//   game();

app.post('/res', (req,res) => { res.send("coucou") })

app.listen(port, () => {console.log("Serveur démarré")})

app.get('/', (req, res) => {
    let render =
        `<form action="./res" method="post">
            <select name="pfc" id="pfc-select">
                <option value="ciseaux">Ciseaux</option>
                <option value="papier">Papier</option>
                <option value="pierre">Pierre</option>
            </select>
            <button type="submit" value="Envoyer">Envoyer</button>
        </form>`
    res.send(render)
}
)