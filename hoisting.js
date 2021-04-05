//hoisting = içar/içamento/jogar pra cima
// hoisting não ocorre com let

console.log('a = ', a) //undefined
var a = 2
console.log('a =', a) //a=2

console.log('colcoando o cód acima dentro de uma função...')

function teste() {
    console.log('h = ', h)
    var h = 7
    console.log('a =', a)
}

teste() //impime normalmente pois var está dentro da função

console.log('h =', h) // erro, pois var h não é lido fora da func.