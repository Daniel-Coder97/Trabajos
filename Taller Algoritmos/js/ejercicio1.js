//Condiciones para el input ejercicio 1
const input = document.getElementById("numero");

input.addEventListener("input", function() {
    let valor = this.value;

    //Permite numeros, signo negativo y e de exponente XD
    valor = valor.replace(/[^0-9.e-]/g, "");

    // Permitir un único signo negativo al inicio
    let negativo = valor.startsWith("-");
    valor = valor.replace(/-/g, "");

    // Separar mantisa y exponente
    let partes = valor.split(/[eE]/);

    // Conservar solamente una e
    let mantisa = partes[0];
    let exponente = partes.slice(1).join("");

    // Limitar la mantisa a un solo punto decimal
    let decimales = mantisa.split(".");
    if (decimales.length > 2) {
      mantisa = decimales[0] + "." + decimales.slice(1).join("");
    }

    // Evitar que el punto sea el primer carácter
    if (mantisa.startsWith(".")) {
      mantisa = mantisa.slice(1);
}

    // Limpiar el exponente: solo números y un signo al inicio
    let signoExp = "";
    if (exponente.startsWith("-") || exponente.startsWith("+")) {
      signoExp = exponente[0];
      exponente = exponente.slice(1);
    }

    exponente = exponente.replace(/[+-]/g, "");

    // Solo permitir e si existe un número en la mantisa
    let resultado = (negativo ? "-" : "") + mantisa;

    if (/[0-9]/.test(mantisa) && partes.length > 1) {
      resultado += "e" + signoExp + exponente;
    }

    this.value = resultado;
});
/* ------------------------------------------------------------
   PROBLEMA 1: Valor absoluto de un numero
   ------------------------------------------------------------ */
function valorAbsoluto(){
  var err = document.getElementById('err');
  var box = document.getElementById('result');
  var numero = parseFloat(document.getElementById('numero').value);
 
  if (isNaN(numero)) { err.classList.add('show'); box.classList.remove('show'); return; }
  err.classList.remove('show');
 
  var absoluto;
  if (numero < 0) {
    absoluto = -numero;
  } else {
    absoluto = numero;
  }
 
  document.getElementById('salida').textContent = 'El valor absoluto es: ' + absoluto;
  document.getElementById('paso').textContent =
    (numero < 0)
      ? '¿numero < 0? Verdadero → absoluto = ' + numero + ' × (-1) = ' + absoluto
      : '¿numero < 0? Falso → absoluto = ' + numero;
  box.classList.add('show');
}
