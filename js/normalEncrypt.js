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

// Encriptador normal //
////////////////////////
const diccionario = [
  ["a", "ai"],
  ["e", "enter"],
  ["i", "imes"],
  ["o", "ober"],
  ["u", "ufat"],
];

// encriptado
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

// Desencriptado
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

//validaciones

const validate = (palabra) => {
  let val = diccionario.some(([, key]) => {
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
  let respt = encrypt(value);
  if (respt) {
    capTextAreaNormal.value = respt;
    capTextAreaNormal.style.color = "green";
  } else {
    capTextAreaNormal.value = mensageEncrypt(value);
    capTextAreaNormal.style.color = "red";
  }
};

const mostrarDecrypt = () => {
  display();
  let capTextArea = document.querySelector("#textInput");
  let value = capTextArea.value;
  let respt = decrypt(value);
  if (respt) {
    capTextAreaNormal.value = respt;
    capTextAreaNormal.style.color = "green";
  } else {
    capTextAreaNormal.value = mensageDecrypt(value);
    capTextAreaNormal.style.color = "red";
  }
};

// copiar mensaje
const copyMensaje = () => {
  let capTextAreaNormal = document.querySelector("#normalEncrypt");
  let value = capTextAreaNormal.value;
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
////////////////////////////////////
// Fin del encriptador normal
// ----------------------------------------------------------------- //
// Encriptador de prueba

////////////////////////////////////
// Fin del encriptador de prueba

////////////////////EVENTOS///////////////////////////

capBtnEncrypt.onclick = () => mostrarEncrypt();
capBtnDecrypt.onclick = () => mostrarDecrypt();
capBtnNormalCopy.onclick = () => copyMensaje();
capBtnClean.onclick = () => clean();
