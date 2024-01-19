/*function DNAtoRNA(dna) {
    return dna.replaceAll('T','U') // Substitui as strings passadas por parametros
}
console.log(DNAtoRNA('TTTTTTT'))

function stringToArray(string){
return string.split(' ') // dividi uma string e converte em um array de palavras.
}
console.log(stringToArray('I LOVE YOU'))*/

/*function paperwork(n, m) {
  let mult = n * m 
    if (n<0 || m<0) {
    return 0
  }
  return mult
}
console.log(paperwork(5, 7))*/
/*function maps(x){
  const double = (x)=> x*2
  return x.map((item)=>item * 2) // metodo e arrow function para dobrar itens de um array
  }
  console.log(maps([4,8,10,12]))*/
  /*const stringToNumber = function(str){
    return Number.parseInt(str) // Transforma uma string em um número
  }
  console.log(typeof stringToNumber('1234'))*/
  /*function makeNegative(num) {
    if (num==0) {
     return 0
    }
    return -Math.abs(num) // Transformando número positivo em negativo
  }
  console.log(makeNegative(100))
  console.log(makeNegative(-20))
  console.log(makeNegative(0))*/
  /*function removeChar(str){
    return str.substring(1, str.length - 1) //Removendo o primeiro e o ultimo caractere de uma string
   }
   console.log(removeChar('otavio'))
   console.log(removeChar('mariano'))
   console.log(removeChar('pedro'))
   console.log(removeChar('diego'))
   console.log(removeChar('isaias'))*/
   /*function removeExclamationMarks(s) {
    return s.replace(/!/g, ' '); // Remove todas as ocorrências da palavra dentro das barras
  }
  console.log(removeExclamationMarks('!Hello World!'))*/
  /*function booleanToString(b){
    return b.toString()*/ // converte o valor booleano fornecido em sua representação de string.

    /*function lovefunc(flower1, flower2){
      if ((flower1 %2==0 && flower2 %2==1) || (flower2 %2==0 && flower1 %2==1)) { // Testando condições de veracidade
        return true
      }
        return false
    }
    console.log(lovefunc(13, 3))*/
    
    /*class SmallestIntegerFinder {
      findSmallestInt(args) {
        return Math.min(...args)
      }
    }
    const classInstance = new SmallestIntegerFinder()
    console.log(classInstance.findSmallestInt([2, 5, 7, 23, 37, 49, 1, 3]))*/

    // function past(h, m, s){
    // let hora = 3600 * h
    // let minuto = 60 * m //Codigo para transformar horas, minutos e segundos em milisegundos
    // let segundos = 1 * s
    // let mili = (hora + minuto + segundos) * 1000
    // return mili
    // }
    // console.log(past(2, 20, 30));

    // function past(h, m, s){
    //   return ((3600 * h + 60 * m + s) * 1000) //Codigo simplificado para transformar horas, minutos e segundos em milisegundos
    // }
    // console.log(past(2, 20, 30));

    // function noSpace(x){
    //   return x.replace(/ /g, '') // Remove os espaços em branco de uma string.
    // }
    // console.log(noSpace('otavio augusto de souza nepomuceno'));
    
    // function palindromo(verificar) {
    //   let texto = verificar.split('').reverse().join('').replace(/ /g, '')
    //   if (texto === verificar.replace(/ /g, '')) { // Verifica se a palavra/frase é um palindromo e remove os espaços quando for um texto
    //     return true 
    //   }
    //   else {
    //     return false
    //   }
    // }
    // console.log(palindromo('a base vem forte'));

    // function greet() {
    //   let word = 'Hello World!'
    //   return word            //Retorna a string da função sem usar o parametro
    // }
    // console.log(greet())

    // function reverseWords(str) {
    //   let invertendo = str.split(' ') //Separa ao invés das letras, as palavras, devido o metodo com espaço
    //   let resultado = [] // Armazena todos os valores em uma lista
    //   for (let index = 0; index < invertendo.length; index+=1) { //Percorre toda a lista do primeiro ao ultimo elemento
    //     resultado.push(invertendo[index].split('').reverse().join('')) //Invertendo as palavras e adicionando em resultado
    //   }
    //   return resultado.join(' ') //Retornando as palavras invertidas e convertendo os itens da lista em uma única string e fixa o separador como um espaço
    // }
    // console.log(reverseWords('The quick brown fox jumps over the lazy dog.'))
        
    // function areYouPlayingBanjo(name) {
    //   if (name.toLowerCase().startsWith('r')) { //Condiciona a primera letra e converte para minusculo
    //   return `${name} plays banjo`
    // }
    // return `${name} does not play banjo`
    // }
    // console.log(areYouPlayingBanjo('Ricardo'));        
        
    // String.prototype.toJadenCase = function () {
    //   let frase = this.split(' ') // Separa ao invés das letras, as palavras, devido o metodo com espaço
    //   let result = [] // Armazena todos os valores em uma lista
    //   for (let index = 0; index < frase.length; index++) {
    //     result.push(frase[index][0].toUpperCase() + frase[index].substring(1)) //Torna a primeira letra maiuscula e concatena a partir da segunda
    //   }
    //   return result.join(' ') 
    //  }
    //  console.log('How can mirrors be real if our eyes aren\'t real'.toJadenCase())
    //  console.log('otavio pedro mariano mickey'.toJadenCase())

    // function descendingOrder(n){
    //   let str = n.toString() // Converte de número para string
    //   let list = str.split('') // Converte de string para lista
    //   let sort = list.sort((a, b) => b - a).join('') // Faz a ordenaçao decrescente e junta a lista em uma única string
    //   return parseInt(sort) // Converte a string em número novamente
    // }
    // console.log(descendingOrder(345))
    // console.log(descendingOrder(1234))
    // console.log(descendingOrder(68917))

    // function minMax(arr){
    //   return [arr.sort(function(a, b){return a - b;})[0], arr[arr.length - 1]] // Ordena a lista(crescente) e retorna o primeiro e ultimo indice
    // }
    // console.log(minMax([9, 8, 5, 2, 3, 1]))
    // console.log(minMax([112, 23, 257, 5, 322]))
    // console.log(minMax([11]))
      
    // const list = [17, 1, 23,]
    // const doublelist = [...list]
    // doublelist.push(5)
    // console.log(list)
    // console.log(doublelist);
     
    // let isLogged = true
    // let pessoa = {
    //   ...(isLogged && {id:1262}),
    //   nome: 'otavio',
    //   idade: 26
    // }
    // console.log(pessoa);
     
  //   function nbYear(p0, percent, aug, p) {
  //     let years = 0
  //     while (p0 < p) {
  //     p0+= Math.floor(p0 * (percent / 100)) + aug
  //      years+=1
  //     }
  //     return years
  // }
  // console.log(nbYear(1000, 2, 50, 1200));
  // console.log(nbYear(1500, 5, 100, 5000));
  // console.log(nbYear(1500000, 2.5, 10000, 2000000));
  // console.log(nbYear(1500000, 0.25, 1000, 2000000));

// Retorna a execução dos operados básicos vindos por parametro. 
  
// function basicOp(operation, value1, value2){
//     if (operation == '+') {
//       return value1 + value2
//     } else if (operation == '-') {
//       return value1 - value2
//     } else if (operation == '*') {
//       return value1 * value2
//     } else {
//       return value1 / value2
//     }
// }
// console.log(basicOp('+', 3, 4));
// console.log(basicOp('-', 3, 4));
// console.log(basicOp('*', 3, 4));
// console.log(basicOp('/', 3, 4));

// function squareSum(numbers) {
// let sum = 0                 //Criado um acumulador para armazenar os valores da lista.
// for (let index = 0; index < numbers.length; index+=1) {
//   sum+=numbers[index] ** 2 // Eleva ao quadrado cada numero da lista e faz a soma pelo incremento.
// }
// return sum
// }
// console.log(squareSum([2,3,4]));

// function disemvowel(str) {
//   return str.replace(/[aeiou]/gi, '') //Remove as vogais
//   }
//   console.log(disemvowel('otavio'));
//   console.log(disemvowel('otavio augusto de souza nepomuceno'));
//   console.log(disemvowel('corinthians'));
//   console.log(disemvowel('OTAVIO'));


      
      
     