// em JS se cria obj através de função

console.log(typeof Object) //função
console.log(typeof new Object) // transforma em object

const cliente = function() {}
console.log(typeof cliente()) // função // tb pode ser escrito com os parenteses console.log(typeof cliente())
console.log(typeof new cliente()) // transforma em object

class produto {} //ES 2015 (ES6)
console.log(typeof produto) // função
console.log(typeof new produto) //transforma em object