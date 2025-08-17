//||||||||||||||||||||| Template string |||||||||||||||||||||||

const nombre1 = "Fernando";
const apellido1 = "Moyano";

//const nombreCompleto = nombre1 + " " + apellido1;
const nombreCompleto = `${nombre1} ${apellido1}`;
console.log(nombreCompleto);

//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

function getSaludo(nombre) {
  return `Hola ${nombre}`;
}

console.log(`Este es un texto: ${getSaludo(nombre1)}`);
