const persona = {
  nombre: "Tony",
  edad: 45,
  clave: "Ironman",
  //rango: "Soldado",
};

/* console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave); */

//const { nombre, edad, clave } = persona;

/* console.log(nombre);
console.log(edad);
console.log(clave); */

//desestructuracion
const retornaPersona = (usuario) => {
  const { nombre, edad, clave } = usuario;
  console.log(edad, clave, nombre);
};

//desestructuracion en parametros
const retornaPersona1 = ({ nombre, edad, clave }) => {
  console.log(edad, clave, nombre);
};

//desestructuracion en parametros con valores por defecto
const retornaPersona2 = ({ nombre, edad, rango = "capitan" }) => {
  console.log(nombre, edad, rango);
};

//simulacion básica del hook useContext
const usarContexto = ({ clave, edad }) => {
  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 14.1231,
      lng: -123234,
    },
  };
};

retornaPersona(persona);
retornaPersona1(persona);
retornaPersona2(persona);

const avenger = usarContexto(persona); //useContext
console.log(avenger);

const {
  nombreClave,
  nombre,
  latlng: { lat, lng },
} = usarContexto(persona); //useContext
console.log(nombreClave, nombre, lat, lng);
