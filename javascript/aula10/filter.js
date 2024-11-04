let idades = [49, 32, 15, 81, 16]

let idadeMenores = idades.filter((idade)=>{
    return idade < 18
})
console.log(idadeMenores);

let idadeMaiores = idades.filter((idade)=>{
    return idade > 18
})
console.log(idadeMaiores);