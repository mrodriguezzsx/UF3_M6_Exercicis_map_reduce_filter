// Exercici 1
console.log("Donat un array, retorna un nou array amb l'arrel quadrada de cadascun dels valors");
let array1 = [1, 2, 3, 4, 5, 6];
let map1 = array1.map(x => Math.sqrt(x));
console.log(map1);

// Exercici 2
console.log("Donat un array, retorna la suma del valors positius");
let array2 = [1, -2, 3, -4, 5, 6];
let sumaPositius = array2.filter(num => num > 0).reduce((a, b) => a + b);;
console.log(sumaPositius);

// Exercici 3
console.log("Calcula el factorial d'un numero");
let factorialDe = 5;
let numeros3 = Array.from({ length: factorialDe }, (_, i) => i + 1);
var factorial = numeros3.reduce((a, b) => a * b, 1);
console.log(factorial);

// Exercici 4
console.log("Calcula la longitud de cada l'array d'arrays");
let array4 = [[1, 2, 3], [4, 5], [6, 7, 8, 9]];
let lengthPorArray = array4.map(subarray => subarray.length);
console.log(lengthPorArray);

// Exercici 5
console.log("Retorn dels treballadors del departament de IT que cobren menys de 60000€");
let employees = [
    { name: "John", salary: 50000, department: "IT" },
    { name: "Jane", salary: 60000, department: "HR" },
    { name: "Bob", salary: 55000, department: "IT" },
    { name: "Sophie", salary: 75000, department: "HR" },
    { name: "Mike", salary: 65000, department: "IT" },
    { name: "Emily", salary: 80000, department: "HR" },
    { name: "David", salary: 70000, department: "IT" },
];

let salaryMaxim = 60000;
let departament = "IT";
let filtrados = employees.filter(objeto => objeto.department === departament && objeto.salary < salaryMaxim);
let nombres = filtrados.map(objeto => objeto.name);
console.log(nombres);