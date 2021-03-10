/*Una software factory registra la siguiente informacion de sus empleados:
Nombre edad (validar)
sexo (masculino - femenino - no binario)
puesto (programador - analista - Qa)
sueldo (entre 15000 y 70000)
La empresa desea saber: se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) promedio de sueldos para cada puesto
b) el sexo del que percibe el mayor sueldo
c) el nombre del empleado femenino con mas sueldo
d) cantidad de programadores no binarios que cobran sueldos entre 20000 y 55000*/

function mostrar() {
  let edad;
  let sexo;
  let puesto;
  let sueldo;
  let maxS;
  let promedio;
  let sexSueldoMayor;
  let maxSF;
  let nombre;
  let nombreF;
  let seguir;
  let promP;
  let promA;
  let promQ;
  let contA = 0;
  let contQ = 0;
  let contP = 0;
  let acumA = 0;
  let acumQ = 0;
  let acumP = 0;
  let flagA = 1;
  let flagQ = 1;
  let flagP = 1;
  let flagS = 1;
  let flagF = 1;
  let flagNB = 1;
  let contNB = 0;

  do {
    nombre = prompt("Ingrese su numbre");
    edad = parseInt(prompt("Ingrese su edad"));
    while (edad <= 17 || isNaN(edad)) {
      edad = parseInt(prompt("Error. Por favor, ingrese su edad: "));
    }
    sexo = prompt("Ingrese sexo (femenino/masculino/no binario):");
    while (sexo != "m" && sexo != "f" && sexo != "nb") {
      sexo = prompt(
        "Dato inválido.Ingrese sexo (femenino/masculino/no binario:"
      );
    }
    puesto = prompt("Ingrese su puesto: ");
    while (puesto != "programador" && puesto != "analista" && puesto != "Qa") {
      puesto = prompt("Error. ingrese puesto: ");
    }
    sueldo = parseInt(prompt("Ingrese sueldo entre 15000/70000: "));
    while (isNaN(sueldo) || sueldo < 15000 || sueldo > 70000) {
      sueldo = parseInt(prompt("Error.Ingrese sueldo entre 15000 a 70000: "));
    }
    if (flagP || puesto == "programador") {
      contP++;
      acumP += sueldo;
      flagP = 0;
    } else if (flagA || puesto == "analista") {
      contA++;
      acumA += sueldo;
      flagA = 0;
    } else if (flagQ || puesto == "Qa") {
      contQ++;
      acumQ += sueldo;
      flagQ = 0;
    }
    if (flagS || sueldo > maxS) {
      maxS += sueldo;
      flagS = 0;
      sexSueldoMayor = sexo;
    }
    if (flagF || (sueldo > maxSF && sexo == "f")) {
      nombref = nombre;
      maxSF += sueldo;
    }
    if (
      flagNB ||
      (sexo == "n" &&
        sueldo >= 20000 &&
        sueldo <= 55000 &&
        puesto == "programador")
    ) {
      contNB++;
    }
    seguir = prompt("Desea continuear ingresando datos? ");
  } while (seguir == "si");
  promP = acumP / contP;
  promA = acumA / contA;
  promQ = acumQ / contQ;

  if (flagP) {
    console.log("No hay promedio en el puesto de programador." + "<br>");
  } else {
    console.log(
      "El promedio en el puesto de programador es de:" + promP + "<br>"
    );
  }
  if (flagA) {
    console.log("No hay promedio en el puesto de analista." + "<br>");
  } else {
    console.log("El promedio de analista es de:" + promA + "<br>");
  }
  if (flagQ) {
    console.log("No hay promedio en el puesto de Qa." + "<br>");
  } else {
    console.log("El promedio de Qa es de:" + promQ + "<br>");
  }
  if (flagS) {
    console.log("Ningún sexo tiene un sueldo mayor" + "<br>");
  } else {
    console.log("El sexo con mayor sueldo es el" + sexSueldoMayor + "<br>");
  }
  if (flagF) {
    console.log("No hay empleadas femeninas." + "<br>");
  } else {
    console.log(
      "El nombre de la empleada femenina con mayor sueldo es:" +
        nombreF +
        "<br>"
    );
  }
  if (flagNB) {
    console.log(
      "No hay programadores no binarios que cobren entre 20000 y 55000" + "<br>"
    );
  } else {
    console.log(
      "Los programadores no binarios que cobran sueldos entre 20000 y 55000 es de: " +
        contNB +
        "<br>"
    );
  }
}
