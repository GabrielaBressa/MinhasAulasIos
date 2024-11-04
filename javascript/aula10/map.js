let valorNum = [2, 4, 6, 8, 10]
 //             0  1  2  3   4
let valorTexto = valorNum.map((num) => {
    console.log(`Valor texto: ${num.toString()}`);
})  

let arrayTexto = valorNum.map((num) => {
    return num.toString()
})

console.log(typeof arrayTexto[2]); //string
console.log(arrayTexto[2]); // 6