/* ------------------------------------------------------------
   PROBLEMA 2: Descuento de supermercado segun numero al azar
   ------------------------------------------------------------ */
function fmtPesos(valor) {
    return valor.toLocaleString('es-CO', {
        style: 'currency',
        currency: 'COP',
        maximumFractionDigits: 2
    });
}

/* CONDICIONES PARA EL INPUT EJERCICIO 2 */
const inputTotal = document.getElementById("total");

console.log("INPUT ENCONTRADO:", inputTotal);

inputTotal.addEventListener("input", function() {
    console.log("SE DETECTÓ UN CAMBIO:", this.value);
});

// Bloquear pegar contenido
inputTotal.addEventListener("paste", function(e) {
    e.preventDefault();
});

// Limpiar y validar los caracteres ingresados
inputTotal.addEventListener("input", function() {
    let valor = this.value;

    // Permitir solamente números y puntos
    valor = valor.replace(/[^0-9.]/g, "");

    // Evitar que el primer carácter sea un punto
    if (valor.startsWith(".")) {
        valor = valor.slice(1);
    }

    // Evitar más de un punto decimal
    let partes = valor.split(".");

    if (partes.length > 2) {
        valor = partes[0] + "." + partes.slice(1).join("");
    }

    // Actualizar el input
    this.value = valor;
});

function descuentoSupermercado() {
    var err = document.getElementById('err');
    var box = document.getElementById('result');
    var total = parseFloat(document.getElementById('total').value);

    if (isNaN(total) || total < 0) {
        err.classList.add('show');
        box.classList.remove('show');
        return;
    }

    err.classList.remove('show');

    var azar = Math.floor(Math.random() * 101);
    var descuento, porc;

    if (azar < 74) {
        descuento = total * 0.15;
        porc = '15%';
    } else {
        descuento = total * 0.20;
        porc = '20%';
    }

    var pagar = total - descuento;

    document.getElementById('azar').textContent = azar;
    document.getElementById('porc').textContent =
        porc + (azar < 74 ? ' (azar < 74)' : ' (azar ≥ 74)');

    document.getElementById('descuento').textContent = fmtPesos(descuento);
    document.getElementById('pagar').textContent = fmtPesos(pagar);

    box.classList.add('show');
}