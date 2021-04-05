function rand([min = 0, max = 1000]) {
    if (min > max)[min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40])) //min = 4 e máx = 50
console.log(rand([992])) // 992 será o mín
console.log(rand([, 10])) // o função assumirá o 0 como mín
console.log(rand([])) //passando um array vazio ele assume os valors padrões, navegando entre 0 e 1000
console.log(rand()) // ERRO, pois vc n pode desestruturar algo com o valor undefined