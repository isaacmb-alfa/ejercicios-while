const numUser = Number(prompt('Escribe un numero entre 1 y 50'));
const numUser2 = Number(prompt('Escribe un numero entre 1 y 50 diferente al primero'));

let count = 1;

while (count <= 50) {
    if (count === numUser) {
        console.log(`Loteria elegiste el ${numUser}`);
    } else if (count === numUser2) {
        console.log(`Loteria elegiste el ${numUser2}`);
    }else{
        console.log(`${count}`);
    }
    count++;
}