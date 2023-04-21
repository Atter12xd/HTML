// 

let fecha1 = new Date('21/04/2023');
let fecha2 = new Date('14/05/2023');

let milisegundosDia = 24 * 60 * 60 * 1000;

let milisegundosTranscurridos = Math.abs(fecha1.getTime() - fecha2.getTime());

let diasTranscurridos = Math.round(milisegundosTranscurridos/milisegundosDia);

console.log(fecha1);
console.log(fecha2);
console.log(milisegundosDia);
console.log(milisegundosTranscurridos);
console.log(diasTranscurridos);



alert("¡Faltan 23 dias!" )