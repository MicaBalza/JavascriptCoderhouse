function Computadora(marca, tipo, serial) {
  this.marca = marca;
  this.tipo = tipo;
  this.serial = serial;

  this.getDatosPC = function () {
    console.log("Computadora " + this.marca + " " + this.tipo);
  };
}

const miPc = new Computadora();
miPc.tipo = "notebook";
miPc.marca = "Compact";
miPc.serial = 1234;
console.log(miPc);
miPc.getDatosPC();

// const miAuto = new Object();
// miAuto.marca = "Ford";
// miAuto.anio = 1969;

// //Object Literal
// const miAuto2 = {
//   marca: "Ford",
//   marcA: "Chevrolete",
//   anio: 1969,
//   características: {
//     colores: ["Rojo", "Blanco", "Verde"],
//     motor: 5.0,
//   },
// };

// //Object Constructor
// function Auto(marcaP, modeloP, yearP, motorP) {
//   this.marca = marcaP;
//   this.modelo = modeloP;
//   this.year = yearP;
// }

// const dodge = new Auto("Dodge", "Challenger", 1970);
// const ford = new Auto("Ford", "Mustang", 1972);
// // console.log(ford["modelo"])

// // Object.seal(dodge);
// // dodge.kms = 2000;
// // dodge.year= 1980;
// // console.log(dodge);

// // delete dodge.kms;
// // console.log(dodge)

// // Object.freeze(ford);
// // ford.kms = 200;

// // console.log(Object.isFrozen(ford))
// // console.log(Object.isFrozen(dodge))

// const conductor = {
//   nombre: "Martin",
//   edad: 160,
// };

// // Unir dos objetos
// // const nuevoObjeto = Object.assign(ford, conductor);
// const nuevoObjeto = { ...ford, ...conductor };
// nuevoObjeto.marca = "Fiat";
// console.log(ford);
// console.log(conductor);
// console.log(nuevoObjeto);

// // Desctructuring
// var { nombre, edad } = nuevoObjeto;
// // var nombre = nuevoObjeto.nombre;
// // var edad = nuevoObjeto.edad;

// console.log(nombre);
// console.log(edad);
