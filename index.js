import validator from "./validator.js";

//Variables
const btnValidar = document.getElementById("btnValidar");
const inputCardNumber = document.getElementById("cardnumber");
const image = document.getElementById("image");

// LLamada de la Funcion de ocultar numeros
validator.franchise(inputCardNumber, image);

// evento click para llamar al boton validar 
btnValidar.addEventListener("click", () => {
  const captureInput = document.getElementById("cardnumber").value;
  // Aplicar sin espacio el valor del input
  const formattCaptureInput = captureInput.replaceAll(" ", "");
  document.getElementById("cardnumber").value = formattCaptureInput;

//Condicion cuando en el imput esta vacio 
  if (formattCaptureInput.length === 0) {
    return alert("Ingrese un número de tarjeta de crédito / débito");
  }
// condicion para q solo reciba numeros 
  if (/^[0-9]+$/i.test(formattCaptureInput) === false) {
    return alert("Ingresar solo números");
  }
//condicion que solo acepte entre 13 y 18 digitos
  if (formattCaptureInput.length > 18 || formattCaptureInput.length < 13) {
    return alert("Ingresar de 13 a 18 digitos");
  }

  // variable para llamar la funcion validator (validar la tarjeta)
  const forValidateInput = validator.isValid(formattCaptureInput);
  //funcion para ocultar los primeros 12 digitos de la tarjeta
  const ocultarPassword = validator.maskify(formattCaptureInput);
  document.getElementById("cardnumber").value = ocultarPassword;

// Condicion de validar la tarjeta
  if (forValidateInput === true) {
    return alert("Tarjeta Valida");
  } else {
    return alert("Tarjeta Inválida, Realice cambio de tarjeta");
  }
});
