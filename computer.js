function getComputerChoice() {
    let template = ["pierre", "papier", "ciseaux"]
    let n = Math.floor(Math.random() * template.length)
    return template[n]
}

module.exports = { getComputerChoice }