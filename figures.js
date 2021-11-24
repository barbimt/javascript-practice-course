// código del cuadrado
//calculamos el perimetro de un cuadrado con lados de 5cm
console.group("Cuadrados");

//creamos el perímetro
const perimetroCuadrado = (lado) => lado * 4;

//sumar los lados del cuadrado 4 veces
const areaCuadrado = (lado) => lado * lado;

console.groupEnd();

// código del triángulo
console.group("Triángulos");
const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;

const areaTriangulo = (base, altura) => (base * altura) / 2;
console.log(areaTriangulo(2, 5));
console.groupEnd();

// código del círculo
console.group("Círculos");
//diámetro
const diametroCirculo = (radio) => radio * 2;

//pi
const PI = Math.PI;

//circunferencia, los usuarios saben cuanto es el radio del circulo
const perimetroCirculo = (radio) => diametroCirculo(radio) * PI;

//area
const areaCirculo = (radio) => PI * radio ** 2;
console.log(areaCirculo(4));
console.groupEnd();

// Aqui interactualmos con el html
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
