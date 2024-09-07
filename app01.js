const numUser = Number(prompt('Escribe un numero de 2 o más cifras'));

let count = 1;

while (count <= numUser) {
  if (count % 5 === 0 ) {
      console.log(`El numero ${count} es multiplo de 5 `);
  }
  count++;
}
console.log(`El numero que elegiste es ${numUser}`);

