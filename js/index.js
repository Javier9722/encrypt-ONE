const capBtnEncrypt = document.querySelector("#btnEncrypt");
const capBtnDecrypt = document.querySelector("#btnDecrypt");
const capTextAreaNormal = document.querySelector("#normalEncrypt");
const capTextAreaExperimental = document.querySelector("#experimentalEncrypt");

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
    return "La palabra se encuentra encriptada";
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
    return "La palabra no se encuentra encriptada";
  }
};

//validaciones

const validate = (palabra) => {
  let val = diccionario.some(([letra, key]) => {
    return palabra.indexOf(key) >= 0;
  });
  return val;
};

// limpiar

const clear = (value) => {
  value.value = "";
};

///////////////////////////////////////////////

capBtnEncrypt.onclick = () => {
  let capTextArea = document.querySelector("#textInput");
  let value = capTextArea.value;
  let respt = encrypt(value);
  capTextAreaNormal.innerText = respt;
  clear(capTextArea);
};
capBtnDecrypt.onclick = () => {
  let capTextArea = document.querySelector("#textInput");
  let value = capTextArea.value;
  let respt = decrypt(value);
  capTextAreaNormal.innerHTML = respt;
  clear(capTextArea);
};

// pruebas de enventos
