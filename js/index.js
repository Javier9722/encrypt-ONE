const capBtnEncrypt = document.querySelector("#btnEncrypt");
const capBtnDecrypt = document.querySelector("#btnDecrypt");
const capTextAreaNormal = document.querySelector("#normalEncrypt");
const capTextAreaExperimental = document.querySelector("#experimentalEncrypt");
const capBtnNormalCopy = document.querySelector("#normalCopy");
const capBtnExperimentalCopy = document.querySelector("#experimentalCopy");
const capBtnClean = document.querySelector("#btnClean");

// fix codigo

capTextAreaNormal.onclick = (e) => {
  console.log(e);
};

// ///////////
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
  return `La palabra '${texto}' se encuentra encriptada`;
};
const mensageDecrypt = (texto) => {
  return `La palabra '${texto}' no se encuentra encriptada`;
};

// mostrar mensaje
const mostrarEncrypt = () => {
  let capTextArea = document.querySelector("#textInput");
  let value = capTextArea.value;
  let respt = encrypt(value);
  if (respt) {
    capTextAreaNormal.value = respt;
    capTextAreaNormal.style.color = "black";
  } else {
    capTextAreaNormal.value = mensageEncrypt(value);
    capTextAreaNormal.style.color = "red";
  }
};

const mostrarDecrypt = () => {
  let capTextArea = document.querySelector("#textInput");
  let value = capTextArea.value;
  let respt = decrypt(value);
  if (respt) {
    capTextAreaNormal.value = respt;
    capTextAreaNormal.style.color = "black";
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
};

////////////////////EVENTOS///////////////////////////

capBtnEncrypt.onclick = () => mostrarEncrypt();
capBtnDecrypt.onclick = () => mostrarDecrypt();
capBtnNormalCopy.onclick = () => copyMensaje();
capBtnClean.onclick = () => clean();
