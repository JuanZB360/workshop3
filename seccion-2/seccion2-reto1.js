// calcular promedio de calificaciones 
let listNotasFinal = [];

let notas = prompt("Agregue las notas separadas por coma");
console.log(notas);

let listaNotas = notas.split(",");
console.log(listaNotas);
for(let i in listaNotas){
    listNotasFinal.push(parseInt(listaNotas[i]));
};
console.log(listNotasFinal);

let promedio = listNotasFinal.reduce((acuulador,elemento) => acuulador+elemento ) / listNotasFinal.length;
console.log(promedio);