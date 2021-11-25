/* -------------------------------- CUADRADO -------------------------------- */
console.group("Cuadrados");

const perimetroCuadrado = (lado) => lado * 4;
const areaCuadrado = (lado) => lado * lado;

console.groupEnd();

/* ------------------------------- TRIANGULOS ------------------------------- */

console.group("Triángulos");

const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;
const areaTriangulo = (base, altura) => (base * altura) / 2;

console.groupEnd();

/* --------------------------------- CIRCULO -------------------------------- */
console.group("Círculos");

const diametroCirculo = (radio) => radio * 2;
const PI = Math.PI;
const perimetroCirculo = (radio) => diametroCirculo(radio) * PI;
const areaCirculo = (radio) => PI * radio ** 2;

console.groupEnd();

/* ------------------- Aqui interactualmos con el HTML ------------------- */

/* -------------------------------- CUADRADO -------------------------------- */
function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;
  const perimetro = perimetroCuadrado(value);

  alert(perimetro);
}
function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;
  const area = areaCuadrado(value);

  alert(area);
}

/* -------------------------------- TRIANGULO ------------------------------- */
const input3 = document.getElementById("InputTriangulo3"); //base
function calcularPerimetroTriangulo() {
  const input1 = document.getElementById("InputTriangulo1");
  const input2 = document.getElementById("InputTriangulo2");

  const valueLado1 = parseInt(input1.value);
  const valueLado2 = parseInt(input2.value);
  const valueLado3 = parseInt(input3.value);

  const perimetro = perimetroTriangulo(valueLado1, valueLado2, valueLado3);

  alert(perimetro);
}
function calcularAreaTriangulo() {
  const inputAltura = document.getElementById("InputTrianguloAltura");

  const valueLado3 = parseInt(input3.value);
  const valueAltura = parseInt(inputAltura.value);

  const area = areaTriangulo(valueLado3, valueAltura);

  alert(area);
}

/* -------------- calcular la altura de un triángulo isósceles. ------------- */
function alturaTrianguloIsosceles(
  trianguloGrandeLadoA,
  trianguloGrandeLadoB,
  trianguloGrandeLadoBase
) {
  if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
    console.error("Los lados a y b no son iguales");
  } else {
    const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
    const trianguloPequenoLadoBase = trianguloGrandeLadoA;

    const trianguloPequenoLadoBCuadrado =
      trianguloPequenoLadoB * trianguloPequenoLadoB;
    const trianguloPequenoLadoBaseCuadrado =
      trianguloPequenoLadoBase * trianguloPequenoLadoBase;

    const trianguloPequenoLadoA = Math.sqrt(
      trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado
    );

    const trianguloGrandeAltura = trianguloPequenoLadoA;
    return trianguloGrandeAltura;
  }
}

/* -------------------------- teorema de Pitágoras -------------------------- */

/* --------------------------------- CIRCULO -------------------------------- */
function calcularPerimetroCirculo() {
  const inputRadio = document.getElementById("InputCirculo");
  const valueRadio = inputRadio.value;

  const perimetro = perimetroCirculo(valueRadio);

  alert(perimetro);
}
function calcularAreaCirculo() {
  const inputRadio = document.getElementById("InputCirculo");
  const valueRadio = inputRadio.value;

  const area = areaCirculo(valueRadio);

  alert(area);
}
