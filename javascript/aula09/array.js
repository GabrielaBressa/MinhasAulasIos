let nomes = ['Aluno01', 'Aluno02', 'Aluno03', 'Aluno04',]
//               0          1          2          3
console.log(nomes[0]);
console.log(nomes[1]);
console.log(nomes[2]);
console.log(nomes[3]);
console.log(`===============`);

//pop() = remover o ultimo elemento dp array
//push = adicionar um elemento no array
//shift =
//unsnift()

let metodoPop = nomes.pop()
console.log(nomes);
console.log(metodoPop);
console.log(`============`);

nomes.push("gabriela")
console.log(nomes);

let fruits = ['apple', 'banana', 'cherry'];
let firstFruit = fruits.shift();

console.log(firstFruit);  
console.log(fruits);