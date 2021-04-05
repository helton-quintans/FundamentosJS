let num1 = 1
let num2 = 2

console.log(++num1 === num2--)
console.log(num1 === num2)

//pós fixada
num1++
console.log(num1)

//pré fixada
--num1
console.log(num1)

console.log(++num1 === num2--) //true
console.log(num1 === num2) //false