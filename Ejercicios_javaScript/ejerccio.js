const evento = new Date("August 19, 1975 23:15:30");

evento.setDate(24);

console.log(evento.getDate());
// Expected output: 24

evento.setDate(32);
// only 21 days in august!

console.log(evento.getDate());
// Expectd output: 1
