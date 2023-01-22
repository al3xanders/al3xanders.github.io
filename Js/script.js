// Encriptar función
function encrypt() {
    var input = document.getElementById("input").value.toLowerCase();
    var output = input.replace(/e/igm, "enter").replace(/o/igm, "ober").replace(/i/igm, "imes").replace(/a/igm, "ai").replace(/u/igm, "ufat");
    document.getElementById("imagen").style.display = "none";
    document.getElementById("h2-txt-2").style.display = "none";
    document.getElementById("txt-2").innerHTML = output;
    document.getElementById("copy").style.display = "show";
    document.getElementById("copy").style.display = "inline";
  }
  
  // Desencriptar función
  function decrypt() {
    var input = document.getElementById("input").value;
    var output = input.replace(/enter/igm, "e").replace(/ober/igm, "o").replace(/imes/igm, "i").replace(/ai/igm, "a").replace(/ufat/igm, "u");
    document.getElementById("imagen").style.display = "none";
    document.getElementById("h2-txt-2").style.display = "none";
    document.getElementById("txt-2").innerHTML = output;
    document.getElementById("copy").style.display = "show";
    document.getElementById("copy").style.display = "inline";
  } 

 // Función copiar

  function copy () {
    var copyText = document.getElementById("txt-2");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    alert("Texto copiado: " + copyText.value);
  }