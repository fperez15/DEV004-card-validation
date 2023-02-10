const validator = {
  isValid(creditNumber) {
    // Convertir en array con el split e invertir los elementos
    const arrayInvertido = creditNumber.split("").map(Number).reverse();

    // Identificar los numeros pares
    const arrayElementPar = arrayInvertido.filter(function (element, indice) {
      if (indice % 2 === 1) return element;
    });

    const arrayElementImpar = arrayInvertido.filter(function (element, indice) {
      if (indice % 2 === 0) return element;
    });

    // Multiplicar *2 y validar si son >= 10 para sumar sus digitos
    const arrayFormattPar = arrayElementPar.map(function (element) {
      const operacionElement = element * 2;
      console.log("elemento *2", operacionElement);

      if (operacionElement >= 10) {
        const arrayDigitos = operacionElement.toString().split("").map(Number);
        
        const sumaArrayDigitos = arrayDigitos.reduce(function (a, b) {
          return a + b;
        });
        //console.log('arrayDigitos: ', arrayDigitos);
        //console.log('sumaArrayDigitos: ', sumaArrayDigitos);
        return sumaArrayDigitos;
      } else {
        return operacionElement;
      }
    });

    const nuevoArray = [...arrayFormattPar, ...arrayElementImpar];
    //console.log("suma de el array par e impar", nuevoArray)
    const sumaFinal = nuevoArray.reduce(function (a, b) {
      return a + b;
    });

    if (sumaFinal % 10 === 0) {
      return true;
    } else {
      return false;
    }
  },

  maskify(creditCard) {
    return creditCard.slice(0, -4).replace(/./g, "#") + creditCard.slice(-4);
  },

  franchise(inputCardNumber, image) {
    inputCardNumber.addEventListener("input", () => {
      const firstChar = inputCardNumber.value;
      if (firstChar[0] === "5") {
        image.src = "../img/mastercard.jpg";
      } else if (firstChar[0] === "4") {
        image.src = "../img/visa.jpg";
      } else {
        image.src = "../img/default.jpg";
      }
    });
  }
};

export default validator;
