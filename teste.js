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

// CÓDIGO PARA CALCULAR A MÉDIA DA LISTA (INDEPENDENTE DO TAMANHO) 

// function findAverage(array) {
//   if (array.length == 0) {
//     return 0;
//   }
// let soma = 0
// for (let index = 0; index < array.length; index+=1) {
//   soma+=array[index]
// }
// let media = soma / array.length
// return media
// }
// console.log(findAverage([1,2,3,4]))
// console.log(findAverage([1,2,3]))
// console.log(findAverage([]))

// class Kata {
//   static getVolumeOfCuboid(length, width, height) {  // calcular o volume de um paralelepípedo com três valores
//     return length * width * height
//   }
// }
// console.log(Kata.getVolumeOfCuboid(1,2,2));

// function getAge(inputString){
//   return parseInt(inputString) // Retorna somente o número da string
// }
// console.log(getAge('5 years old'));

// function positiveSum(arr) {
//   if (arr.length == 0) { // Se houver um array vazio, retorna 0 conforme solicitado
//     return 0
//   }
//   let soma = 0
//   for (let index = 0; index < arr.length; index++) {
//     if (arr[index] > 0) { // Ignoro os numeros negativos da soma 
//       soma+= arr[index]
//     }
//   }
//   return soma
// }
// console.log(positiveSum([10,20,30,40,-150,60]))
// console.log(positiveSum([10,20,30,40,-110,-200]))
// console.log(positiveSum([50]))
// console.log(positiveSum([]))

// function otherAngle(a, b) {
//   return 180 - (a + b) // Retorna o terceiro ângulo de um triângulo fornecendo dois valores
// }
// console.log(otherAngle(1,10))
// console.log(otherAngle(90,30))
// console.log(otherAngle(60,60))

// FAZ A COMPARAÇAO ENTRE OS DOIS VALORES DE UMA LISTA DE LISTAS E RETORNA O VALOR CORRESPONDENTE

// function openOrSenior(data){
//   let list = []
//   for (let index = 0; index < data.length; index+=1) {
//     if (data[index][0] > 55 && data[index][1] > 7) {
//       list.push('Senior')
//     }
//       else {
//       list.push('Open')
//     }
//   }
//   return list
// }
// console.log(openOrSenior([[59, 12],[55, -1],[12, -2],[12, 8]]))
// console.log(openOrSenior([[45, 12],[55, 21],[19, -2],[104, 20]]))

// function checkForFactor (base, factor) {
//   if (base % factor == 0 ) {
//     return true
//   } else {
//     return false
//   }
//   // return base % factor == 0 ? true : false // Resolução via ternário
//   // return base % factor == 0 // Simplificando a resolução anterior
// }
// console.log(checkForFactor(10,2))
// console.log(checkForFactor(63,8))
// console.log(checkForFactor(2450,11))
// console.log(checkForFactor(24612,3)) 

// function singleElement(uniq) {
//   let unico = {} // Criado um objeto como contador de N itens da lista
//   for (let index = 0; index < uniq.length; index++) { 
//     const currentElement = uniq[index] // Criado uma constante que assumi cada valor da lista(Item corrente)
//     if (unico[currentElement] === undefined) { // verifica se o valor da CONSTANTE é uma chave de UNICO
//       unico[currentElement]=1 // Ah cada novo item, cria uma chave com o valor da CONSTANTE e atribui o valor 1 
//     }
//     else {
//       unico[currentElement]+=1 // Após a chave criada, ele itera cada nova recorrencia 
//     }
//   }
//   const uniqEntries = Object.entries(unico) // Transforma { '1': 4, '2': 1 } em [ [ '1', 4 ], [ '2', 1 ] ] -> Cria uma constante para modificar o objeto em uma lista de listas(A chave se torna o indice 0 e o indice 1, o valor da chave)
//   for (let index = 0; index < uniqEntries.length; index++) {
//     if (uniqEntries[index][1] == 1) { // Busca em [ [ '1', 4 ], [ '2', 1 ] ] o valor [ '2', 1 ] -> Filtra no indice 1, todos que tem o valor 1 
//       return uniqEntries[index][0] // Busca em [ '2', 1 ] o valor 2 -> Retorna o indice 0, referente ao valor buscado
//     }
//   }
  
// }
// console.log(singleElement([1,1,1,2,1]))
// console.log(singleElement([4,2,1,2,1]))
// console.log(singleElement([51,10,10,20,1,51,20]))

// function filter_list(l) {
//   return l.filter(item => typeof item === 'number'); // verifica se o tipo de cada elemento no array é um número. O método filter cria um novo array contendo apenas os elementos que atendem a essa condição.
// }
// console.log(filter_list([1,2,'a','b']));
// console.log(filter_list([1,'a','b',0,15]));
// console.log(filter_list([1,2,'aasf','1','123',123]));

// Código para calcular o índice de massa corporal (imc = peso / altura 2 ).

// function bmi(weight, height) {
//   let imc = weight/(height*height)
//   if (imc <= 18.5) {
//     return "Abaixo do peso"
//   }
//   else if (imc <= 25.0){
//     return "Normal"
//   }
//   else if (imc <= 30.0){
//     return "Excesso de peso"
//   }
//   else {
//     return "Obeso"
//   }
// }
// console.log(bmi(80, 1.70));

// O número é passado por parametro e tem que retornar o mesmo por extenso!

// function switchItUp(number){
//   switch (number) {
//     case 0:
//      return 'Zero'
//     case 1:
//      return 'One' 
//     case 2:
//      return 'Two'
//     case 3:
//      return 'Three'
//     case 4:
//      return 'Four'
//     case 5:
//      return 'Five'  
//     case 6:
//      return 'Six'
//     case 7:
//      return 'Seven' 
//     case 8:
//      return 'Eight'
//     case 9:
//      return 'Nine'
//   }
// }
// console.log(switchItUp(1));

// O valor passado por parametro, pega todos os multiplos de 3 ou 5 até o intervalo do mesmo e os soma!

// function solution(number) {
//   let multiplos = 0
//   for (let index = 0; index < number; index+=1) {
//     if (index % 3 == 0 || index % 5 == 0) {
//       multiplos+=index
//     }
//   }
//   return multiplos
// }
// console.log(solution(2));

// Crie uma função que receba 2 inteiros na forma de uma string como entrada e produza a soma (também como uma string):

// function sumStr(a,b) {
//   let NumForStr = Number(a) + Number(b)
//   return NumForStr.toString()
// }
// //       OU:
// function sumStr(a,b) {
//   return String(Number(a)+Number(b));
// }
// console.log(typeof sumStr('10','11'));

// function removeSmallest(numbers) {
//   let LocateInd = numbers.indexOf(Math.min(...numbers)) // Encontro o indice de menor valor no array
//   return numbers.filter((_,index) => index !== LocateInd) // Filtro o item do indice anteriormente encontrado e comparo se são diferentes e retorno os demais indices.
  
// }
// console.log(removeSmallest([1,2,3,4,5]));
// console.log(removeSmallest([15,12,3,4,5,3]));

// const rps = (p1, p2) => {  // Jogo Pedra, Papel, Tesoura - Tem que retornar qual jogador ganhou, em caso de empate retorne Draw!
//   if (p1 == p2) {
//     return "Draw!"
//   }
//   if ((p1 == 'paper' && p2 == 'rock') || (p1 == 'rock' && p2 == 'scissors') || (p1 == 'scissors' && p2 == 'paper')) {
//     return "Player 1 won!"
//   }
//   else {
//     return "Player 2 won!"
// }
// }
// console.log(rps('rock', 'paper'));

// function getMiddle(s) { // Retorna o caractere do meio da palavra.
//   if (s.length % 2 == 1) { // Se o comprimento da palavra for ímpar, retorne o caractere do meio.
//     return s.charAt(s.length/2)
//   }
//   if (s.length % 2 == 0) { // Se o comprimento da palavra for par, retorne os 2 caracteres do meio.
//     return s.substr(s.length/2 - 1,2)
//   }
// }
// console.log(getMiddle('uva'));

// EM UMA ÚNICA STRING, MODIFICAR TODOS OS NUMEROS MENORES QUE 5 PARA 0 E MAIORES PARA 1!

// function fakeBin(x){
// let str = x.split('') // Torna a string única em uma lista(array).
// for (let index = 0; index < str.length; index++) {
//   if (Number(str[index]) < 5) { // Converte a lista de strings em números e verifica a condição se é menor que 5 e se for retorna 0!
//     str[index] = '0'
//   }
//   if (Number(str[index]) >= 5) { // Converte a lista de strings em números e verifica a condição se é maior que 5 e se for retorna 1!
//     str[index] = '1'
//   }
// }
// return str.join('') // Retorna a lista para um array único. 
// }
// console.log(fakeBin('123456789'));
// console.log(fakeBin('0123'));
// console.log(fakeBin('782193'));

// FALTA TERMINAR ESSE DESAFIO ABAIXO

// function high(x){
//  const valorLetras = {
//   a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13, n: 14, o: 15,
//   p: 16, q: 17, r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
//  }
//  let cont = {}
//  let separador = x.split(' ')
//  for (let i = 0; i < separador.length; i+=1) {
//   const palavra = separador[i];
//   let soma = 0
//   for (let index = 0; index < palavra.length; index+=1) {
//   let letra = palavra[index]
//   if (valorLetras.hasOwnProperty(letra)) {
//      soma += valorLetras[letra];
//   }
//  }
//  cont[palavra] = soma
//  }
//  const uniqEntries = Object.entries(cont)
//  for (let index = 0; index < uniqEntries.length; index++) {
//   if (uniqEntries == cont) {
    
//   }
//   return 
//  }
// }
// console.log(high('otavio'));
// console.log(high('otavio augusto de souza nepomuceno'));

// function century(year) {
//   return Math.ceil(year/100)  //Dado um ano, retorne o século em que ele se encontra.
// }
// console.log(2024);

// function isPangram(string){
//  let alfabeto = "abcdefghijklmnopqrstuvwxyz" //
//  let letras = alfabeto.split('')
//  for (let index = 0; index < letras.length; index++) {
//   let conferindo = letras[index]
//   if (!string.toLowerCase().includes(conferindo)) {
//     return false
//   }
// }
//   return true
// } 
// console.log(isPangram('The quick brown fox jumps over the lazy dog'));
// console.log(isPangram('otavio'));
// console.log(isPangram("abcdefghijklmnopqrstuvwxyz"));
// console.log(isPangram('Cwm fjord bank glyphs vext quiz'));

// function duplicateCount(text){
//   text = text.toLowerCase().split('').sort().join('') // Reatribuo valor para o parametro(text), e realizo as ações dos métodos. 
//   let count = i = 0; // Crio um contador e uma variável(i) e atribuo o valor de zero para ambas. 
//    while(i < text.length){ // Crio a condição que (Enquanto 'i' for menor que o comprimento de 'text')
//       let p1 = text.indexOf(text[i]); // Criada uma variável para capturar o indice da primeira string em text.
//       let p2 = text.lastIndexOf(text[i]); // Criada uma variável para capturar o indice da última string em text.
//       var len = p2-p1+1 // Criada uma variável para subtrair o indice da primeira e da última string capturadas nas variáveis(p1,p2) em text.
//       len != 1 ? (count++, i += len) : i++; // Usando um ternário(condição, caso de sucesso, caso de falha) (caso de falha: Pula pro próximo indice)
//    } // (condição: Se o calculo for diferente de 1, incrementa no contador em um (count++) e pula pro indice da proxima string(letra)
//    return count // retorna o contador
// }
// console.log(duplicateCount('abcde'));
// console.log(duplicateCount('aabbcde'))
// console.log(duplicateCount('aabBcde'))
// console.log(duplicateCount('Indivisibilidades'))

// function cockroachSpeed(s) {
//   return Math.floor((s/3.6)*100) // Pega velocidade em km por hora e a retorna em cm por segundo e arredonda para o número inteiro.
// }
// console.log(cockroachSpeed(1.08));
// console.log(cockroachSpeed(1.09));

// function doubleChar(str) {
//   let subStr = str.split('') // Divido a string única em uma lista(array) de strings
//   let mult = subStr.map((x) => x + x).join('') // Uso o metodo map para clonar o array e o metodo join para voltar para uma string única.
//   return mult
// }
// console.log(doubleChar("abcd"));
// console.log(doubleChar("Adidas"));
// console.log(doubleChar("1337"));

// var uniqueInOrder=function(iterable) { // -> retorna uma lista de itens sem nenhum elemento com o mesmo valor próximos uns dos outros e preservando a ordem original dos elementos.
//   // iterable = typeof iterable === 'string' ? iterable.split('') : iterable;
//   return [...iterable].filter((a, i) => a !== iterable[i-1])
// }

// function solution(str){
//   return str.split('').reverse().join('')
// }
// console.log(solution('hello'));

// Escreva uma função que aceite um número inteiro ne uma string scomo parâmetros e retorne uma string srepetida exatamente nvezes.

// function repeatStr (n, s) {
//   let cont = ''
//   for (let index = 0; index < n; index++) {
//     cont+= s
//   }
//   return cont
// }
// console.log(repeatStr(6, 'otavio'));
// console.log(repeatStr(4, 'A'));

// function enough(cap, on, wait) {
//   if (cap - on <= wait) { 
//     return wait - (cap - on)
//   }
//   else {
//    return 0
//   }
// }
// console.log(enough(10, 5, 5)); 
// console.log(enough(100, 60, 50)); 
// console.log(enough(80, 37, 50)) 

// const quarterOf = (month) => {
//   if (month <= 3) {
//     return 1
//   } else if (month <= 6) {
//     return 2                 // Dado um mês como um número inteiro de 1 a 12, retorne a qual trimestre do ano ele pertence como um número inteiro.
//   } else if (month <= 9) {
//     return 3
//   } else if (month <= 12) {
//     return 4
//   }
// }
// console.log(quarterOf(8));


// function solution(str){
//   return str.split('').reverse().join('')
// }
// console.log(solution('hello'));

// Escreva uma função que aceite um número inteiro ne uma string scomo parâmetros e retorne uma string srepetida exatamente nvezes.

// function repeatStr (n, s) {
//   let cont = ''
//   for (let index = 0; index < n; index++) {
//     cont+= s
//   }
//   return cont
// }
// console.log(repeatStr(6, 'otavio'));
// console.log(repeatStr(4, 'A'));

// function enough(cap, on, wait) {
//   if (cap - on <= wait) { 
//     return wait - (cap - on)
//   }
//   else {
//    return 0
//   }
// }
// console.log(enough(10, 5, 5)); 
// console.log(enough(100, 60, 50)); 
// console.log(enough(80, 37, 50)) 

// const quarterOf = (month) => {
//   if (month <= 3) {
//     return 1
//   } else if (month <= 6) {
//     return 2                 // Dado um mês como um número inteiro de 1 a 12, retorne a qual trimestre do ano ele pertence como um número inteiro.
//   } else if (month <= 9) {
//     return 3
//   } else if (month <= 12) {
//     return 4
//   }
// }
// console.log(quarterOf(8));


// var uniqueInOrder=function(iterable) { // -> retorna uma lista de itens sem nenhum elemento com o mesmo valor próximos uns dos outros e preservando a ordem original dos elementos.
//   // iterable = typeof iterable === 'string' ? iterable.split('') : iterable;
//   return [...iterable].filter((a, i) => a !== iterable[i-1])
// }

// console.log(uniqueInOrder([1,2,2,3,3]));
// console.log(uniqueInOrder('AAAABBBCCDAABBB'));
// console.log(uniqueInOrder('ABBCcAD'));

// console.log(uniqueInOrder([1,2,2,3,3]));
// console.log(uniqueInOrder('AAAABBBCCDAABBB'));
// console.log(uniqueInOrder('ABBCcAD'));