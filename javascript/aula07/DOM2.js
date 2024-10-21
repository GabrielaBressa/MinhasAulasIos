let elementoX = document.getElementById(`elemento0`);

let elementos = document.getElementsByClassName(`elemento2`)

for (let contador = 0; contador < elementos.length; contador++) {
    elementos[contador].Style.color = `red`;
}

let nomeTag = document.getElementsByTagName("p")[1]

nomeTag[0].style.color = 'red'