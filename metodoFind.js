/*
 O método find() em JavaScript é uma função disponível para arrays que permite encontrar 
o primeiro elemento que atende a uma determinada condição. Se nenhum elemento atender à condição, 
o método retorna undefined.
*/

//Exemplos:

//Encontrando um número maior que 25 em um array:
const numbers = [10, 20, 30, 40, 50];

const foundNumber = numbers.find((element)=> {
   return element > 25;
});

console.log(foundNumber); // Output: 30


/*-------------------------------------------------------------------------------------------------------------------*/
console.log("-------------------------------------------------------------------------------------------------------")
//Encontrando um objeto em um array com base em uma propriedade:

const persons = [
   { name: 'Alice', age: 30 },
   { name: 'Bob', age: 25 },
   { name: 'Charlie', age: 35 }
 ];
 
 const person = persons.find((p)=> {
   return p.name === 'Bob';
 });
 
 console.log(person); // Output: { name: 'Bob', age: 25 }

 
/*-------------------------------------------------------------------------------------------------------------------*/
console.log("-------------------------------------------------------------------------------------------------------")
//Encontrando uma string com uma substring específica:

const words = ['apple', 'banana', 'cherry', 'date'];

const foundWord = words.find(function(element) {
  return element.includes('ban');
});

console.log(foundWord); // Output: 'banana'
