let nota = 7.2
let situacao

/*if(nota >= 6){
    situacao = 'APROVADO'
}
else {
    situacao = 'REPROVADO'
}*/

/*if(nota >= 6) situacao = 'APROVADO'
else situacao = 'REPROVADO'*/

//As três partes do operador ternario
//Primeira parte: condição (que iria depois do if)
//Entre a primeira e a segunda parte -> ?
//Segunda parte: o resultado, caso a condição seja VERDADEIRA
//Entre a 2º e a 3º parte ->:
//3º parte: o resultado, caso a condição seja FALSA
situacao = nota >= 6 ? 'APROVADO' : 'REPROVADO'

console.log(situacao)

let user = 'admin'
let userType

userType = user === 'admin' || user === 'root' ? 'Superuser' : 'Ordinary user'

console.log(userType)
