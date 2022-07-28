const fruits = [
  { nombre: "mario", edad: 22, notas: [12, 14, 15] },
  { nombre: "juan", edad: 14, notas: [11, 10, 15] },
  { nombre: "Pedro", edad: 16, notas: [11, 11, 11] },
  { nombre: "Rene", edad: 24, notas: [12, 12, 12] },
];

function prueba() {
  let prueba = fruits.map((f) => {
    return {
      ...f,
      promedio: f.notas.reduce((ac, u) => {
    return  Math.round(ac=ac+u/f.notas.length);
      }, 0),
    };
  });
  return prueba;
}
console.log(prueba());
