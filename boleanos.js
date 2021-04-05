let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) // !! = não, não alguma coisa, sendo assim imprimirá o valor real dessa coisa

console.log('os verdadeiros...') // todos inteiroos são verdadeiros execeto o 0
console.log(!!3)
console.log(!!-13)
console.log(!!' ')
console.log(!!'Texto teste')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = Infinity))
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('para finalizar...')
console.log(!!('' || null || 0 || 'Eu'))

let nome = ''
console.log(nome || 'nome não digitado')