const body = document.querySelector('body');
let numUser;
let count = 1;
let arr = [];
while (count !== 0 && numUser !== 0) {
    numUser = Number(prompt('Escribe un numero a lazar, si deseas terminar la ejecución escribe el numero 0'));
    arr.push(numUser);
    count++;
}
if (numUser === 0) {
    const lista = document.createElement('ul');
    arr.forEach(elemt => {
        const li = document.createElement('li');
        li.innerHTML=`<p>${elemt}</p>`
        lista.appendChild(li);
    })
    body.appendChild(lista);
    console.log(arr);
    console.log(`Programa detenido, haz introducido 0`);
}
