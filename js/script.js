const texto = document.getElementById('textoEnDes');
const imagen = document.getElementById('munieco');
const mensajeNoEncon = document.getElementById('noEncontrado');
const resultado = document.getElementById('enDes');
const copiar = document.getElementById('copiar');
const exito = document.getElementById('alert1');
const encriptar1 = document.getElementById('btnEncriptar');
const error = document.getElementById('alert2');
const error2= document.getElementById('alert3');
const error3= document.getElementById('alert4');
const acentos = /[ÁÉÍÓÚÑáéíóúñàèìòù]/;
const mayusculas = /[A-Z]/

const encriptacion = texto => {
    return texto
        .replace(/a/g, "ai")
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat")
}

const desencriptacion = texto => {
    return texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u")
}

let textFinal = '';

function verificarAcento(texto) {
    let resultado = acentos.test(texto);
    if (resultado) {
        error.style.visibility = "visible";
        setTimeout(function () {
            error.style.visibility = "hidden";
        }, 3000);

        return true;
    }
    return false;
}


function verificarMayus(texto) {
    let letras = mayusculas.test(texto);
    if (letras != false) {
        error.style.visibility = "visible";
        setTimeout(function () {
            error.style.visibility = "hidden";
        }, 3000);
        return true;
    }
    return false;
}

function encriptar() {
    textFinal = " ";
    let textoInicial = texto.value.toString();
    let mayuc = verificarMayus(textoInicial);
    let acento = verificarAcento(textoInicial);
    if (textoInicial == "" || textoInicial == " " || textoInicial.trim() == '') {
        error2.style.visibility = "visible";
        setTimeout(function () {
            error2.style.visibility = "hidden";
        }, 3000);
    } else if (textoInicial != '' && acento != true && mayuc != true) {
        resultado.removeAttribute('hidden');
        textFinal = encriptacion(textoInicial);
        imagen.classList.add("ocultarMunieco");
        resultado.textContent = textFinal;
        mensajeNoEncon.classList.add("ocultarMensaje")
        copiar.removeAttribute('hidden');
    }
}

function desencriptar() {
    textFinal = " ";
    let textoInicial = texto.value.toString();
    let mayuc = verificarMayus(textoInicial);
    let acento = verificarAcento(textoInicial);

    if (textoInicial == "" || textoInicial == " " || textoInicial.trim() == '') {
        error3.style.visibility = "visible";
        setTimeout(function () {
            error3.style.visibility = "hidden";
        }, 3000);
    } else if (textoInicial != '' && acento != true && mayuc != true) {
        resultado.removeAttribute('hidden');
        textFinal = desencriptacion(textoInicial);
        imagen.classList.add("ocultarMunieco");
        resultado.textContent = textFinal;
        mensajeNoEncon.classList.add("ocultarMensaje")
        copiar.removeAttribute('hidden');
    }
}


copiar.addEventListener("click", function () {
    exito.style.visibility = "visible";
    setTimeout(function () {
        exito.style.visibility = "hidden";
    }, 3000); // 3000 es el tiempo en milisegundos (3 seg)
});

function copiar1() {

    navigator.clipboard.writeText(textFinal);

}