// Programar declarando variables en ingles globaliza el codigo

//Button Encrypt

function getEncrypt() {
  let inputValue = document.getElementById('input-text').value;
  let outputValue = '';
  let textUppercase = /[A-Z]/g;
  let sign = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;

  if (inputValue == "") {
    alert('No puede estar vacío. Por favor ingresa tu mensaje.');
  } else if (inputValue.match(textUppercase) != inputValue.match(textUppercase) || inputValue.match(sign) != inputValue.match(sign)) {
    alert('Tu mensaje contiene letras en mayúsculas o caracteres especiales. Edita e intenta de nuevo.');
  } else {
    for (var i = 0; i < inputValue.length; i++) {
      if (inputValue[i] == 'a') {
        let textEncrypt = inputValue[i].replace('a', 'ai',);
        outputValue = outputValue + textEncrypt;
      } else if (inputValue[i] == 'e') {
        let textEncrypt = inputValue[i].replace('e', 'enter');
        outputValue = outputValue + textEncrypt;
      } else if (inputValue[i] == 'i') {
        let textEncrypt = inputValue[i].replace('i', 'imes');
        outputValue = outputValue + textEncrypt;
      } else if (inputValue[i] == 'o') {
        let textEncrypt = inputValue[i].replace('o', 'ober');
        outputValue = outputValue + textEncrypt;
      } else if (inputValue[i] == 'u') {
        let textEncrypt = inputValue[i].replace('u', 'ufat');
        outputValue = outputValue + textEncrypt;
      } else {
        outputValue = outputValue + inputValue[i];
      }
    }
    document.getElementById('output-text').innerHTML = outputValue;

    document.querySelector('.done-encrypt').style.display = 'block';
    document.querySelector('.done-decrypt').style.display = 'none';
    document.querySelector('.warning-text2').style.display = 'none';
    document.querySelector('.warning-text3').style.display = 'none';
    document.querySelector('.position-toy').style.display = 'none';
    document.getElementById('output-text').style.display = 'block';
    document.getElementById('war-text').style.display = 'block';
  }
}

// Button Decrypt

function getDecrypt() {
  let inputValue = document.getElementById('input-text').value;
  let outputValue = '';
  let textUppercase = /[A-Z]/g;
  let sign = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;

  if (inputValue == "") {
    alert('No puede estar vacío. Por favor ingresa tu mensaje.');
  } else if (inputValue.match(textUppercase) != inputValue.match(textUppercase) || inputValue.match(sign) != inputValue.match(sign)) {
    alert('Tu mensaje contiene letras en mayúsculas o caracteres especiales. Edita e intenta de nuevo.');
  } else {
    outputValue = inputValue.replace(/ai/g, 'a').replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ober/g, 'o').replace(/ufat/g, 'u');

    document.getElementById('output-text').innerHTML = outputValue;

    document.querySelector('.done-decrypt').style.display = 'block';
    document.querySelector('.done-encrypt').style.display = 'none';
    document.querySelector('.warning-text2').style.display = 'none';
    document.querySelector('.warning-text3').style.display = 'none';
    document.querySelector('.position-toy').style.display = 'none';
    document.getElementById('output-text').style.display = 'block';
    document.getElementById('war-text').style.display = 'block';
  }
}

// Button Copy

function copyText(){
  let copy = document.getElementById('output-text');
  copy.select();
  document.execCommand('copy');  
}

//Button Delete 

function deleteText() {
  document.getElementById('output-text').innerHTML = '';
  document.querySelector('.done-encrypt').style.display = 'none';
  document.querySelector('.done-decrypt').style.display = 'none';
  document.querySelector('.warning-text2').style.display = 'block';
  document.querySelector('.warning-text3').style.display = 'block';
  document.querySelector('.position-toy').style.display = 'flex';
  document.getElementById('output-text').style.display = 'none';
  document.getElementById('war-text').style.display = 'none';
}