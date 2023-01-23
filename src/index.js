import validator from "./validator.js";

const btnValidar = document.getElementById("btnValidar");

btnValidar.addEventListener("click", () => {
  const captureInput = document.getElementById("cardnumber").value;

  // Aplicar sin espacio el valor del input
  const formattCaptureInput = captureInput.replaceAll(" ", "");
  document.getElementById("cardnumber").value = formattCaptureInput;

  if (formattCaptureInput.length === 0) {
    return alert("Ingrese un número de tarjeta de crédito / débito");
  }

  if (/^[0-9]+$/i.test(formattCaptureInput) === false) {
    return alert("Ingresar solo números");
  }

  if (formattCaptureInput.length > 18 || formattCaptureInput.length < 13) {
    return alert("Ingresar de 13 a 18 digitos");
  }

  const forValidateInput = validator.isValid(formattCaptureInput);

  if (forValidateInput) {
    return alert("La tarjeta fue validada exitosamente gracias a Francis");
  } else {
    return alert("Lo siento pero lamento informar que su tarjeta se clonó");
  }
});
