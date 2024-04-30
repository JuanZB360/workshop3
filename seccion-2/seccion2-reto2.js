//calculadora de de estadisticas de calificaciones

let calificaciones = prompt("Ingresa las notas de los estudiantes separandolas por coma")
let listaNotas = calificaciones.split(",").map(nota =>
    parseInt(nota)
);
console.log(listaNotas);

let promedioalumnos = listaNotas.reduce((acumulador,elemento) =>
    acumulador + elemento
) / listaNotas.length;

console.log(promedioalumnos);


let notamayor = Math.max(...listaNotas);
let notamenor = Math.min(...listaNotas);
console.log(listaNotas);
console.log(notamayor);
console.log(notamenor);

let aprobados = listaNotas.filter((elemento) => elemento > 70).length;
let reprobados = listaNotas.filter((elemento) => elemento< 70).length;
listaNotas.sort();

console.log(`Promedio: ${promedioalumnos}`);
console.log(`Nota mayor: ${notamayor}`);
console.log(`Nota menor: ${notamenor}`);
console.log(`Aprobados: ${aprobados}`);
console.log(`Reprobados: ${reprobados}`);
console.log(`Lista ordenada de mayor a menor`)
console.log(listaNotas);

alert(`Promedio: ${promedioalumnos}\n
    Nota mayor: ${notamayor}\n
    Nota menor: ${notamenor}\n
    Aprobados: ${aprobados}\n
    Reprobados: ${reprobados}\n`);