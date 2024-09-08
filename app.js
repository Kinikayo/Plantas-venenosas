console.log("hello wold!");

function pesquisar() {
    let section = document.getElementById("resultados-pesquisa")
console.log(section);

let campoPesquisa = document.getElementById("campo-pesquisa").value
if (!campoPesquisa){
    section.innerHTML = "<p>Infelizmente não conseguimos encontrar a informação que você estava procurando</p>"
    return}
    campoPesquisa = campoPesquisa.toLowerCase()
let resultados = "";
let titulo ="";
let descrição = "";

for(let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descrição = dado.descrição.toLocaleLowerCase()
    if(titulo.includes(campoPesquisa) || descrição.includes(campoPesquisa)) {
resultados += `
    <div class="item-resultado">
        <h2>${dado.titulo}</h2>
        <p class="descrição">${dado.descrição}</p>
        <a href="${dado.link}" target="_blank">Mais informações</a>
    </div>
    `}

    }
if (!resultados) {
resultados ="<p>Infelizmente não conseguimos encontrar a informação que você estava procurando</p>"
}

section.innerHTML = resultados
console.log("deu certo!");
}




