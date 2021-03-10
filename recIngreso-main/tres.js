
/*Ferrete lamparas 2.0 El empleado del negocio ingresa los siguientes datos de cada venta, teniendo en cuenta que tenemos varias ventas:
nombre del cliente
cantidad de lamparas, marca (FelipeLamparas - ArgentinaLuz - Illuminatis)
precio por unidad ,total de la compra: dato que se calcula.
Se sabe que si la marca es FelipeLamparas y la cantidad de lamparas supera las 5 unidades, se aplica un descuento del 10% sobre la compra 
Si la marca es ArgentinaLuz y compra 3 o mas unidades, el descuento es del 5%. 
Ningun otro caso aplica descuento. al terminar la carga de todas las ventas,la empresa desea saber:
a) Cuanto recauda la empresa en concepto de todas las ventas realizadas.
b) Cuanto "perdio" la empresa en concepto de descuentos.
c) El promedio de la cantidad de lamparas vendidas de cada marca.
d) La marca que mas ventas realizo (sin importar la cantidad de lamparas vendidas) */



function mostrar()
{
	let nombre;
	let cantidadL;
	let contF = 0;
	let contA= 0;
	let contI = 0;
	let acumF = 0;
	let acumA = 0;
	let acumI = 0;
	let promF= 0;
	let promA = 0;
	let promI= 0;
	let marca;
	let descuento10;
	let descuento5;
	let totalD;
	let marcaMV;
	let precioU;
	let total;
	let precioF;
	let total = 0;
	seguir = "s"
	do {

		nombre = prompt("Ingrese el nombre del cliente");
		cantidadL = parseInt(prompt("Ingrese la cantidad de lamparas:"));
		while (isNaN(cantidadL) || cantidadL<= 0) {
			cantidadL = parseInt(prompt("Error. Ingrese la cantidad de lamparas:"));
		}
		marca = prompt("Ingrese marca: felipelamparas / argentinaluz / illuminatis");
		while (marca != "felipelamparas" && marca != "argentinaluz" && marca != "illuminatis") {
			marca = prompt("Error. Ingrese marca");
		}
		precioU = parseInt(prompt("Ingrese el precio por unidad"));
		while (isNaN(precioXUnidad) || precioXUnidad <= 0) {
			precioXUnidad = parseInt(prompt("Error. Ingrese el precio por unidad"));
		}
		total = precioU * cantidadL;
		totalV += total
	
		if (marca == "felipelamparas" && cantidadL> 5) {
			descuento10 = total * 10 / 100
			precioF = total - descuento10
			totalD += descuento10
		}
		else if (marca == "argentinaluz" && cantidadL >= 3) {
			descuento5 = total * 5 / 100
			precioF = total - descuento5
			totalD += descuento5
		}
	

		if (marca == "felipelamparas") {
			acumF += cantidadL
			contF++
		} else if (marca == "argentinaluz") {
			acumA += cantidadL
			cont++
		} else {
			acumI += cantidadL
			contI++
		}

		if (contF > contA && contF > contI) {
			marcaMV = "FelipeLamparas"
		} else if (contArg >= contF && contA> contI) {
			marcaMV = "ArgetinaLuz"
		} else {
			marcaMV = "Illuminatis"
		}

	

		seguir = prompt("Desea seguir?: ")
	} while (seguir == "si");

	if (contF != 0) {
		promF = acumF / contF
	}
	if (contA != 0) {
		promA= acumA/ contA
	}
	if (contI != 0){
		promI = acumI/ contI
	}


	console.log("La empresa recaudo " + totalV);
	if (totalD != 0) {
		console.log("La empresa perdio $" + totalD + " por descuentos");
	}
	console.log("El promedio de FelipeLamparas es de " + promF);
	console.log("El promedio de  ArgentinaLuz es de " + promA);
	console.log("El promedio de  Illuminatis es de " + promI);
	console.log("La marca que mas vendio es " + marcaMV);












}
}
