// /*function DNAtoRNA(dna) {
//     return dna.replaceAll('T','U') // Substitui as strings passadas por parametros
// }
// console.log(DNAtoRNA('TTTTTTT'))

// function stringToArray(string){
// return string.split(' ') // dividi uma string e converte em um array de palavras.
// }
// console.log(stringToArray('I LOVE YOU'))*/

// /*function paperwork(n, m) {
//   let mult = n * m 
//     if (n<0 || m<0) {
//     return 0
//   }
//   return mult
// }
// console.log(paperwork(5, 7))*/
// /*function maps(x){
//   const double = (x)=> x*2
//   return x.map((item)=>item * 2) // metodo e arrow function para dobrar itens de um array
//   }
//   console.log(maps([4,8,10,12]))*/
//   /*const stringToNumber = function(str){
//     return Number.parseInt(str) // Transforma uma string em um número
//   }
//   console.log(typeof stringToNumber('1234'))*/
//   /*function makeNegative(num) {
//     if (num==0) {
//      return 0
//     }
//     return -Math.abs(num) // Transformando número positivo em negativo
//   }
//   console.log(makeNegative(100))
//   console.log(makeNegative(-20))
//   console.log(makeNegative(0))*/
//   /*function removeChar(str){
//     return str.substring(1, str.length - 1) //Removendo o primeiro e o ultimo caractere de uma string
//    }
//    console.log(removeChar('otavio'))
//    console.log(removeChar('mariano'))
//    console.log(removeChar('pedro'))
//    console.log(removeChar('diego'))
//    console.log(removeChar('isaias'))*/
//    /*function removeExclamationMarks(s) {
//     return s.replace(/!/g, ' '); // Remove todas as ocorrências da palavra dentro das barras
//   }
//   console.log(removeExclamationMarks('!Hello World!'))*/
//   /*function booleanToString(b){
//     return b.toString()*/ // converte o valor booleano fornecido em sua representação de string.

//     /*function lovefunc(flower1, flower2){
//       if ((flower1 %2==0 && flower2 %2==1) || (flower2 %2==0 && flower1 %2==1)) { // Testando condições de veracidade
//         return true
//       }
//         return false
//     }
//     console.log(lovefunc(13, 3))*/
    
//     /*class SmallestIntegerFinder {
//       findSmallestInt(args) {
//         return Math.min(...args)
//       }
//     }
//     const classInstance = new SmallestIntegerFinder()
//     console.log(classInstance.findSmallestInt([2, 5, 7, 23, 37, 49, 1, 3]))*/

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
// console.log(rps('scissors', 'paper'));

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

// console.log(uniqueInOrder([1,2,2,3,3]));
// console.log(uniqueInOrder('AAAABBBCCDAABBB'));
// console.log(uniqueInOrder('ABBCcAD'));

// Atualizando o github

//  function countSheep(num) { // Contar carneiros para dormir
//   let cont = ''; 
//   for (let index = 1; index <= num; index += 1) {
//     cont += `${index} sheep...`;
//   }
//   return cont;
// };
// console.log(countSheep(5));

// function expandedForm(num) {
//   const numForString = num.toString();
//   let result = '';
//   for (let index = 0; index < numForString.length; index += 1) {
//     const digit = parseInt(numForString[index]);
//     if (digit !== 0) {
//       result += `${digit * Math.pow(10, numForString.length - index - 1)} + `;
//   }
// }
// return result.slice(0, -3);
// }
// OU O DEBAIXO
// function expandedForm(num) {
//   return String(num)
//           .split("")
//           .map((num, index, arr) => num + '0'.repeat(arr.length - index -1 ))
//           .filter((num) => Number(num) !== 0)
//           .join(' + ');
// }
// console.log(expandedForm(12));
// console.log(expandedForm(42));
// console.log(expandedForm(70304))

// function findUniq(arr) {
//   arr.sort((a, b) => a - b);
//   return arr[0] === arr[1] ? arr.pop() : arr[0];
// }
// console.log(findUniq([1, 1, 1, 2, 1, 1]));
// console.log(findUniq([0, 0, 0.55, 0, 0])); 

// function duplicateEncode(word) {
//   word = word.toLowerCase();
//   return word.replace(/./g, m => word.indexOf(m) == word.lastIndexOf(m) ? '(' : ')');
// }
// console.log(duplicateEncode('otavio'));

// String.prototype.isUpperCase = function() {
//   return [...this].every((element) => element === element.toUpperCase()); // Verifica se todas as letras da string são maiusculas, e se uma não for, retorna falso.
// }
// console.log(''.isUpperCase());

// function twiceAsOld(dadYearsOld, sonYearsOld) {
// return Math.abs(sonYearsOld * 2 - dadYearsOld) // Calcula quando o pai teve/ terá o dobro da idade do filho
// }
// console.log(twiceAsOld(54, 30)); 

// function solution(nums) {
//     if (nums === null || nums.length === 0) {
//         return [];
//     }
//     const ordem = nums.sort((a, b) => a - b);
//     return ordem;
// }
// console.log(solution([1, 2, 3, 10, 5]));
// console.log(solution([]));
// console.log(solution(null));
// console.log(solution([1, 6, 3, 10, 27]));

// function reverseList(list) {
//     return list.reverse()    // função que recebe uma lista e retorna uma lista na ordem inversa.
// }
// console.log(reverseList([1, 2, 3, 4]));
// console.log(reverseList([9, 2, 0, 7]));

// function sumTwoSmallestNumbers(numbers) {  //
//     numbers.sort((a, b) => a - b);
//     const minValores = numbers.slice(0, 2);
//     const somaDosMenoresValores = minValores.reduce((acc, val) => acc + val);
//     return somaDosMenoresValores
// }
// console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));
// console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]));
// console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7]));

// function move(position, roll) { // lança os dados e move duas vezes o número de espaços indicados pelos dados. Crie uma função para o jogo terminal que pega a posição atual do herói e rola (1-6) e retorna a nova posição.
//     return position + (roll * 2);
// }
// console.log(move(0, 4));
// console.log(move(3, 6));
// console.log(move(2, 5));

// const sequenceSum = (begin, end, step) => {
//     if (begin > end) {
//         return 0;
//     }

//     let sum = 0;

//     for (let index = begin; index <= end; index += step) {
//         sum += index;
//     }
//     return sum;
// };
// console.log(sequenceSum(2, 21, 3));
// console.log(sequenceSum(5, 18, 3));
// console.log(sequenceSum(3, 15, 5));

// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//     const autonomia = fuelLeft * mpg;
//     if (autonomia >= distanceToPump) {
//         return true;
//     }
//     if (autonomia <= distanceToPump) {
//         return false;
//     }
// };
// console.log(zeroFuel(50, 25, 2));
// console.log(zeroFuel(100, 50, 1));

// function howMuchILoveYou(nbPetals) {
//     const frases = [
//         'I love you',
//         'a little',
//         'a lot',
//         'passionately',
//         'madly',
//         'not at all',
//     ];
//     const res = (nbPetals - 1) % frases.length;
//     return frases[res];
// }
// console.log(howMuchILoveYou(7));
// console.log(howMuchILoveYou(2));

// function removeUrlAnchor(url) {
//     const i = url.indexOf('#'); // Retorna o indice do elemento passado por parametro
//     if (i !== -1) {
//         return url.substring(0, i); // Retorna a string de acordo com o parametro inicial e o final
//     }    
//     return url;
// }
// console.log(removeUrlAnchor('www.codewars.com#about'));
// console.log(removeUrlAnchor('www.codewars.com/katas/?page=1#about'));
// console.log(removeUrlAnchor('www.codewars.com/katas/'));

// function greet(name) {
//     return `Hello, ${name} how are you doing today?`; // Retorna a saudação com o nome passado por parametro
// }
// console.log(greet('Otávio'));

// const reverseSeq = n => {
//     const numbers = []
//     for (let index = 1; index <= n; index += 1) {
//         numbers.unshift(index)
//     }
//     return numbers;
// };
// console.log(reverseSeq(5));
// function isIsogram(str){ // Suponha que a string vazia seja um isograma( não possui letras repetidas, consecutivas ou não consecutivas). Ignore letras maiúsculas e minúsculas.
//     str = str.toLowerCase();
//     let seen = {};
//     for (let index = 0; index < str.length; index += 1) {
//         let letter = str[index]
//         const condition = Boolean(seen[letter])
//         if (condition) {
//             return false;
//         }
//         seen[letter] = true;
//     }
//     return true;
//   }
//   console.log(isIsogram("abCdeFG"));
//   console.log(isIsogram("aba"));

// function shortcut(string) {
//     return string.replace(/[aeiou]/g, ''); 
// }
// console.log(shortcut('HELLO'));

// function setAlarm(employed, vacation) {
//     return employed && !vacation; // A função deve retornar verdadeiro se você estiver empregado e não estiver de férias.
// }
// console.log(setAlarm(false, true));

// function removeEveryOther(arr) { // Remover todos os itens que tenham o indice impar
//     for (let index = arr.length - 1; index >= 0; index -= 1) {
//         if (index % 2 !== 0) {
//             arr.splice(index, 1);
//         }
//     }
//     return arr;
// }
// console.log(removeEveryOther(['Keep', 'Remove', 'Keep', 'Remove', 'Keep']));
// console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// function evenOrOdd(number) {
//     return number % 2 === 0 ? 'Even' : 'Odd';
// }
// console.log(evenOrOdd(45));

// function dnaStrand(dna) {
//     const letters = {
//         A: 'T',
//         T: 'A',
//         C: 'G',
//         G: 'C',
//     };
//     // return dna.replace(/A/g, 't').replace(/T/g, 'a').replace(/C/g, 'g').replace(/G/g, 'c').toUpperCase();
//     return dna.split('').map(v => letters[v]).join('');
// }
// console.log(dnaStrand('ATG'));

// function abbrevName(name) {
//     const letters = name.trim().split(' ') //  converter um nome em iniciais, a saída deve ser duas letras maiúsculas com um ponto separando-as.
//     const firstLetter = letters[0][0].toUpperCase();
//     const secondLetter = letters[1][0].toUpperCase();
//     return `${firstLetter}.${secondLetter}`; 
//     //return name.split(' ').map(i => i[0].toUpperCase()).join('.')
//     //var nameArray = name.split(" ");
//     //return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
// }
// console.log(abbrevName("Evan Cole"));
// console.log(abbrevName("P Favuzzi"));

// function problem(x) { // Faça uma função que retorne o valor multiplicado por 50 e aumentado por 6. Se o valor inserido for uma string deverá retornar "Erro".
//     return typeof x === 'number' ? x * 50 + 6 : 'Error';
// }
// console.log(problem('pedro'));

// function friend(friends) { // Faça um programa que filtre uma lista de strings e retorne uma lista contendo apenas o nome dos seus amigos(4 letras).
//     return friends.filter((fourLetters) => fourLetters.length === 4);
// }
// console.log(friend(['Ryan', 'Kieran', 'Mark', 'Jimmy', 'aret']));

// function greet(language) { // Escreva uma função de 'boas-vindas' que receba um parâmetro 'linguagem', com um tipo String, e retorne uma saudação.
// const greeting = {
// english: 'Welcome', czech: 'Vitejte', danish: 'Velkomst', dutch: 'Welkom', estonian: 'Tere tulemast', 
// finnish: 'Tervetuloa', flemish: 'Welgekomen', french: 'Bienvenue', german: 'Willkommen', irish: 'Failte', 
// italian: 'Benvenuto', latvian: 'Gaidits', lithuanian: 'Laukiamas', polish: 'Witamy', spanish: 'Bienvenido',
// swedish: 'Valkommen', welsh: 'Croeso',
//     };
//     return greeting[language.toLowerCase()] || 'Welcome';
// }
// console.log(greet('english'));
// console.log(greet('dutch'));
// console.log(greet('otavio'));

// function getChar(c) {
//     return String.fromCharCode(c); // Escreva uma função que receba um número e retorne o caracter ASCII correspondente para esse valor.
// }
// console.log(getChar(96));

// function roundToNext5(n) {
//     return Math.ceil(n / 5) * 5; // Dado um número inteiro como entrada, você pode arredondá-lo para o próximo (ou seja, "maior ou igual") múltiplo de 5
// }
// console.log(roundToNext5(2));
// console.log(roundToNext5(23));

// const areaOrPerimeter = (l, w) => (l === w ? l ** 2 : (l + w) * 2);
// // Você recebe o lengthe widthde um polígono de 4 lados. O polígono pode ser um retângulo ou um quadrado. Se for um quadrado, retorne sua área. Se for um retângulo, retorne seu perímetro.
// console.log(areaOrPerimeter(3, 3));
// console.log(areaOrPerimeter(6, 10)); 

// function hoopCount(n) { // Escreva um programa onde Alex possa inserir (n) quantas vezes o arco dá voltas e ele retornará uma mensagem encorajadora.
//     return n >= 10 ? 'Great, now move on to tricks' : 'Keep at it until you get it';
// }
// console.log(hoopCount(30));

// function between(a, b) { // Complete a função que recebe dois inteiros ( a, b, onde a < b) e retorna uma matriz de todos os inteiros entre os parâmetros de entrada, incluindo eles.
//     const list = [];
//     for (let index = a; index <= b; index += 1) {
//         list.push(index);
//     }
//     return list;
// }
// console.log(between(-4, 4));