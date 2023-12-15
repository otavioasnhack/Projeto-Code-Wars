function DNAtoRNA(dna) {
    return dna.replaceAll('T','U') // Substitui as strings passadas por parametros
}
console.log(DNAtoRNA('TTTTTTT'))