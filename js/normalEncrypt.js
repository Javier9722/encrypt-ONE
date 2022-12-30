import diccionario2 from "./dictionary.js";

const capBtnEncrypt = document.querySelector("#btnEncrypt");
const capBtnDecrypt = document.querySelector("#btnDecrypt");
const capTextAreaNormal = document.querySelector("#normalEncrypt");
const capTextAreaExperimental = document.querySelector("#experimentalEncrypt");
const capBtnNormalCopy = document.querySelector("#normalCopy");
const capBtnExperimentalCopy = document.querySelector("#experimentalCopy");
const capBtnClean = document.querySelector("#btnClean");
// capturando elementos para mostrar o no el display
const capNoMessage = document.querySelector(".noDatos");
const capMessage = document.querySelector(".datos");

const diccionario = [
  ["a", "ai"],
  ["e", "enter"],
  ["i", "imes"],
  ["o", "ober"],
  ["u", "ufat"],
];

// ENCRIPTADO
// normal
const encrypt = (palabra) => {
  if (!validate(palabra)) {
    diccionario.forEach(([letra, key]) => {
      if (palabra.indexOf(letra) >= 0) {
        palabra = palabra.replaceAll(letra, key.toUpperCase());
      }
    });
    return palabra.toLowerCase();
  } else {
    return false;
  }
};
// prueba
const pruebaEncrypt = (palabra) => {
  if (!pruebaValidate(palabra)) {
    diccionario2.forEach(([letra, key]) => {
      if (palabra.indexOf(letra) >= 0) {
        palabra = palabra.replaceAll(letra, key.toUpperCase());
      }
    });
    return palabra.toLowerCase();
  } else {
    return false;
  }
};

// DESENCRIPTADO
// normal
const decrypt = (palabra) => {
  if (validate(palabra)) {
    diccionario.forEach(([letra, key]) => {
      if (palabra.indexOf(key) >= 0) {
        palabra = palabra.replaceAll(key, letra.toUpperCase());
      }
    });
    return palabra.toLowerCase();
  } else {
    return false;
  }
};
// prueba
const pruebaDecrypt = (palabra) => {
  if (pruebaValidate(palabra)) {
    diccionario2.forEach(([letra, key]) => {
      if (palabra.indexOf(key) >= 0) {
        palabra = palabra.replaceAll(key, letra.toUpperCase());
      }
    });
    return palabra.toLowerCase();
  } else {
    return false;
  }
};
// VALIDACIONES
// normal
const validate = (palabra) => {
  let val = diccionario.some(([, key]) => {
    return palabra.indexOf(key) >= 0;
  });
  return val;
};
// prueba
const pruebaValidate = (palabra) => {
  let val = diccionario2.some(([, key]) => {
    return palabra.indexOf(key) >= 0;
  });
  return val;
};

// mensajes
const mensageEncrypt = (texto) => {
  return texto.length > 0
    ? `La palabra "${texto}" se encuentra encriptada`
    : "No hay texto para encriptar";
};
const mensageDecrypt = (texto = "na") => {
  return texto.length > 0
    ? `La palabra "${texto}" no se encuentra encriptada`
    : "No hay texto para desencriptar";
};

// sin mensajes
const nodisplay = () => {
  capNoMessage.classList.remove("noDisplay");
  capMessage.classList.add("noDisplay");
};
// con mensajes
const display = () => {
  capNoMessage.classList.add("noDisplay");
  capMessage.classList.remove("noDisplay");
};

// mostrar mensaje
const mostrarEncrypt = () => {
  display();
  let capTextArea = document.querySelector("#textInput");
  let value = capTextArea.value;
  let resptNormal = encrypt(value);
  let resptPrueba = pruebaEncrypt(value);
  if (resptNormal) {
    capTextAreaNormal.value = resptNormal;
    capTextAreaNormal.style.color = "green";
  } else {
    capTextAreaNormal.value = mensageEncrypt(value);
    capTextAreaNormal.style.color = "red";
  }
  if (resptPrueba) {
    capTextAreaExperimental.value = resptPrueba;
    capTextAreaExperimental.style.color = "green";
  } else {
    capTextAreaExperimental.value = mensageEncrypt(value);
    capTextAreaExperimental.style.color = "red";
  }
};

const mostrarDecrypt = () => {
  display();
  let capTextArea = document.querySelector("#textInput");
  let value = capTextArea.value;
  let resptNormal = decrypt(value);
  let resptPrueba = pruebaDecrypt(value);
  if (resptNormal) {
    capTextAreaNormal.value = resptNormal;
    capTextAreaNormal.style.color = "green";
  } else {
    capTextAreaNormal.value = mensageDecrypt(value);
    capTextAreaNormal.style.color = "red";
  }
  if (resptPrueba) {
    capTextAreaExperimental.value = resptPrueba;
    capTextAreaExperimental.style.color = "green";
  } else {
    capTextAreaExperimental.value = mensageEncrypt(value);
    capTextAreaExperimental.style.color = "red";
  }
};

// copiar mensaje
const copyMensajeNormal = () => {
  let capTextAreaNormal = document.querySelector("#normalEncrypt");
  let value = capTextAreaNormal.value;
  navigator.clipboard.writeText(value);
};
const copyMensajePrueba = () => {
  let capTextAreaExperimental = document.querySelector("#experimentalEncrypt");
  let value = capTextAreaExperimental.value;
  navigator.clipboard.writeText(value);
};
// limpiar
const clean = () => {
  let capTextArea = document.querySelector("#textInput");
  let capTextAreaNormal = document.querySelector("#normalEncrypt");
  capTextArea.value = "";
  capTextAreaNormal.value = "";
  nodisplay();
};

// EVENTOS
capBtnEncrypt.onclick = () => mostrarEncrypt();
capBtnDecrypt.onclick = () => mostrarDecrypt();
capBtnNormalCopy.onclick = () => copyMensajeNormal();
capBtnExperimentalCopy.onclick = () => copyMensajePrueba();
capBtnClean.onclick = () => clean();

///////////////////////////////////////////////////////////////////////////////////////////
