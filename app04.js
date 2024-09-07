const body = document.querySelector('body');
let palabra;
let count = 0;
let arr = [];
let concat= '';

while (count === 0 && !palabra) {
    let palabra = prompt('Escribe una palabra o una letra, para terminar solo cancela o deja en blando el campo');
    if(!palabra){
        count++
    }
    arr = [...arr, palabra];
}
arr.forEach(elemt => {
    if(elemt !== null){
        concat = concat + ' ' + elemt;
    }
});
const parrafo = document.createElement('p');
parrafo.innerText = concat;

body.append(parrafo);
