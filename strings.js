const escola = "Helton School"

console.log(escola.charAt(5)) //imprime a letra de indice 5
console.log(escola.charAt(28)) // não gera erro, só retorna vazio
console.log(escola.charCodeAt(3)) //vai pegar o valor de T na tabela unicode/ASK
console.log(escola.indexOf('S')) //se S contem dentro da string ele retorna o indice da tabela unicode 

console.log(escola.substring(1)) // imprime do indice 1 pra frente
console.log(escola.substring(0, 8)) // do indice 0 até 8 sem incluir o 8

console.log('Diretor '.concat(escola).concat("!!!")) //concatenar strings
console.log(escola.replace(4, "uuu")) // n sei pq n substituiu

console.log('Ana, karla, beto'.split(',')) // gerar array separado por virgula