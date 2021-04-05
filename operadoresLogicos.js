function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTvDe50 = trabalho1 && trabalho2
        //const comprarTvDe32 = !!(trabalho1 ^ trabalho2) //bitwise xor // ou exclusivo
    const comprarTvDe32 = trabalho1 != trabalho2 // está é uma forma mais simples de simular o ou exclusivo, pq se uma coisa é diferente da oura, logo é um ou exclusivo
    const manterSaudavel = !comprarSorvete // operador unário

    return { comprarSorvete, comprarTvDe50, comprarTvDe32, manterSaudavel }

}

console.log(compras(true, true))
console.log(compras(false, false))
console.log(compras(true, false))
console.log(compras(false, true))