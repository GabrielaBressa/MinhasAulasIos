//function exibirAlerta() {
   // alert("Olá,gabi!")
//}
//let nome = prompt ("Insira seu nome?");
//if (Gabi) {
   // alert ("bem-vindo," + nome + "!");
//}
//let idade = prompt("Insira sua idade?");
//if (idade >= 18) {
  //  alert("voce e maior de idade.")
//} else {
  //  alert("voce e menor de idade.")
//}
let genero = prompt("Insira seu genero (masculino/feminino):")
if (idade >= 18 && (genero.toLocaleLowerCase() === "masculino" || genero.toLocaleLowerCase() === "feminino")) {
    alert("voce e maior de idade e o seu genero e" + genero + ".");
}