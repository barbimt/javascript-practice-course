/* --------------------------- calcular descuento --------------------------- */
function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  return precioConDescuento;
}

function calcularAhorro(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  return precio - precioConDescuento;
}

function onClickButtonPriceDiscount() {
  const inputPrice = document.getElementById("InputPrice");
  const priceValue = inputPrice.value;

  const inputDiscount = document.getElementById("InputDiscount");
  const discountValue = inputDiscount.value;

  const precioConDescuento = calcularPrecioConDescuento(
    priceValue,
    discountValue
  );
  const totalAhorrado = calcularAhorro(priceValue, discountValue);

  const resultPrice = document.getElementById("ResultPrice");
  resultPrice.innerText =
    "El precio con descuento son $" +
    precioConDescuento +
    ". Estas ahorrando $" +
    totalAhorrado;
}

/* ------------------------------ usar cupones ------------------------------ */
const coupons = [
  {
    name: "JuanDC_es_Batman",
    discount: 15,
  },
  {
    name: "pero_no_le_digas_a_nadie",
    discount: 30,
  },
  {
    name: "es_un_secreto",
    discount: 25,
  },
];
function onClickButtonPriceCouponDiscount() {
  const inputPrice = document.getElementById("InputPrice");
  const priceValue = inputPrice.value;

  const inputCoupon = document.getElementById("InputCoupon");
  const couponValue = inputCoupon.value;

  const isCouponValueValid = function (coupon) {
    return coupon.name === couponValue;
  };

  const userCoupon = coupons.find(isCouponValueValid);

  if (!userCoupon) {
    alert("El cupón " + userCouponValue + "no es válido");
  }
  if (!userCoupon) {
    alert("El cupón " + userCouponValue + "no es válido");
  } else {
    const descuento = userCoupon.discount;
    const precioConDescuento = calcularPrecioConDescuento(
      priceValue,
      descuento
    );

    const resultPrice = document.getElementById("ResultPrice");
    resultPrice.innerText =
      "El precio con descuento son $" + precioConDescuento;
  }
}
