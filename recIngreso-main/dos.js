/*Realizar el algoritmo que permita ingresar los datos de los 500 alumnos de la UTN FRA, los datos solicitados son:
nombre carrera("Quimica";"Fisica";"Sistemas")
sexo (masculino - femenino - no binario)
cantidad de materias(entre 1 y 5)
Nota promedio (entre 0 y 10)
edad (validar)
se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio de los alumnos que estudian Fisica. (Sin importar el sexo).
b) El nombre de la alumna mas joven.
c) Porcentaje de estudiantes que estudia cada carrera.
d) La edad y nombre del estudiante que cursa mas materias exceptuando la carrera de Quimica.*/

function mostrar() {
  let nombre;
  let carrera;
  let sexo;
  let cantidadM;
  let nota;
  let edad;
  let mejorPromF;
  let nombreMejorPromF;
  let flagPromF = 1;
  let nombreAJ;
  let edadAJ;
  let flagAJ = 1;
  let edadMM;
  let nombreMM;
  let masM;
  let flagMM = 1;
  let porcentajeQ;
  let porcentajeF;
  let porcentajeS;
  let flagQ = 1;
  let flagF = 1;
  let flagS = 1;
  let contQ = 0;
  let contF = 0;
  let contS = 0;
  let contA = 0;

  for (let i = 0; i < 1; i++) {
    nombre = prompt("Ingrese nombre: ");
    while (!isNaN(nombre)) {
      nombre = prompt("Error. Ingrese nombre: ");
    }
    carrera = prompt("Ingrese carrera (quimica, fisica o sistemas) : ");
    while (
      carrera != "quimica" &&
      carrera != "fisica" &&
      carrera != "sistemas"
    ) {
      carrera = prompt(
        "Error. Ingrese carrera (quimica, fisica o sistemas) : "
      );
    }
    sexo = prompt("Ingrese sexo (masculino, femenino o no binario) : ");
    while (sexo != "m" && sexo != "f" && sexo != "nb") {
      sexo = prompt("Error. Ingrese sexo: ");
    }
    cantidadM = parseInt(prompt("Ingrese cantidad de materias (entre 1 y 5)"));
    while (cantidadM < 1 || cantidadM > 5 || isNaN(cantidadM)) {
      cantidadM = parseInt(
        prompt("Error, ingrese cantidad de materias (entre 1 y 5)")
      );
    }
    nota = parseInt(prompt("Ingrese nota (entre 0 y 10)"));
    while (nota < 0 || nota > 10 || isNaN(nota)) {
      nota = parseInt(prompt("Error, ingrese nota (entre 0 y 10)"));
    }
    edad = parseInt(prompt("Ingrese edad: "));
    while (isNaN(edad) || edad <= 17) {
      edad = parseInt(prompt("Error, Ingrese edad: "));
    }
    if (carrera == "fisica") {
      if (flagPromF || nota > mejorPromF) {
        mejorPromF = nota;
        nombreMejorPromF = nombre;
        flagPromF = 0;
      }
    }
    if (sexo == "femenino") {
      if (flagAJ || edad < edadAJ) {
        edadAJ = edad;
        nombreAJ = nombre;
        flagAJ = 0;
      }
    }
    if (carrera != "quimica") {
      if (flagMM || cantidadM > masM) {
        masM = cantidadM;
        nombreMM = nombre;
        edadMM = edad;
        flagMM = 0;
      }
    }
    if (flagQ || carrera == "quimica") {
      contQ++;
      flagQ = 0;
    } else if (flagF || carrera == "fisica") {
      contF++;
      flagF = 0;
    } else if (flagS || carrera == "sistemas") {
      contS++;
      flagS = 0;
    }
  }

  porcentajeQ = (contQ * 100) / contA;
  porcentajeF = (contF * 100) / contA;
  porcentajeS = (contS * 100) / contA;

  if (flagPromF != 0) {
    console.log("a) No hay alumnos que estudien fisica");
  } else {
    console.log(
      "a) El nombre del mejor promedio de los  que estudian Fisica es: " +
        nombreMejorPromF +
        " con un promedio de " +
        mejorPromF
    );
  }

  if (flagAJ != 0) {
    console.log("b) No hay alumnas");
  } else {
    console.log(
      "b) El nombre de la alumna mas joven es: " +
        nombreAlumnaJoven +
        " con una edad de " +
        edadAlumnaJoven
    );
  }
  if (flagQ) {
    console.log("c) No existen alumnos que estudien esa carrera" + "<br>");
  } else {
    console.log(
      "c) El porcentaje  que estudian quimica es de: " +
        porcentajeQ +
        "%" +
        "<br>"
    );
  }
  if (flagF) {
    console.log("c) No existen alumnos que estudien esa carrera" + "<br>");
  } else {
    console.log(
      "c) El porcentaje estudia fisica es de: " + porcentajeF + "%" + "<br>"
    );
  }
  if (flagS) {
    console.log("c) No existen alumnos que estudian esa carrera" + "<br>");
  } else {
    console.log(
      "c) El porcentaje que estudia sistemas es de: " +
        porcentajeS +
        "%" +
        "<br>"
    );
  }

  if (flagMM != 0) {
    console.log("d) Sólo se ingresaron alumnos que estudian quimica");
  } else {
    console.log(
      "d) La edad y nombre del estudiante que cursa mas materias (menos quimica) es: " +
        edadMM +
        " y " +
        nombreMM +
        " con  " +
        masM +
        "materias."
    );
  }
}
