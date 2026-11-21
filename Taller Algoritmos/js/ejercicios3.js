const inputCedula = document.getElementById("cedula");

// Bloquear pegar contenido
inputCedula.addEventListener("paste", function(e) {
    e.preventDefault();
});

// Limpiar y validar los caracteres ingresados
inputCedula.addEventListener("input", function() {
    let valor = this.value;

    // Permitir solamente números
    valor = valor.replace(/[^0-9]/g, "");

    // Actualizar el input
    this.value = valor;
});

const inputNombre = document.getElementById("nombre");

// Bloquear pegar contenido
inputNombre.addEventListener("paste", function(e) {
    e.preventDefault();
});

// Limpiar y validar los caracteres ingresados
inputNombre.addEventListener("input", function() {
    let valor = this.value;

    // Permitir solamente Texto y espacios
    valor = valor.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, "");

    // Actualizar el input
    this.value = valor;
});

const inputCodigo = document.getElementById("codigo");

// Bloquear pegar contenido
inputCodigo.addEventListener("paste", function(e) {
    e.preventDefault();
});

// Limpiar y validar los caracteres ingresados
inputCodigo.addEventListener("input", function() {
    let valor = this.value;

    // Permitir textos y números; sin espacio
    valor = valor.replace(/[^A-Z0-9]/g, "");

    // Actualizar el input
    this.value = valor;
});

const inputBasico = document.getElementById("basico");

inputBasico.addEventListener("input", function() {
    let valor = this.value;

    // Permitir números y punto decimal
    valor = valor.replace(/[^0-9.]/g, "");

    // Limitar a un solo punto decimal
    let decimales = valor.split(".");
    if (decimales.length > 2) {
        valor = decimales[0] + "." + decimales.slice(1).join("");
    }

    // Evitar que el punto sea el primer carácter
    if (valor.startsWith(".")) {
        valor = valor.slice(1);
    }

    this.value = valor;
});


/* ------------------------------------------------------------
   PROBLEMA 3: Salario neto de vendedores
   ------------------------------------------------------------ */
var SMLV = 644336;    // SMLV 2015
var AUXILIO = 74000;  // Auxilio de transporte 2015
var vendedores = [];
 
function agregarVendedor(){
  var err = document.getElementById('err');
  var cedula = document.getElementById('cedula').value.trim();
  var nombre = document.getElementById('nombre').value.trim();
  var codigo = document.getElementById('codigo').value.trim();
  var basico = parseFloat(document.getElementById('basico').value);
  var ventas = parseFloat(document.getElementById('ventas').value);
  var prestamos = parseFloat(document.getElementById('prestamos').value);
 
  if (!cedula || !nombre || !codigo || isNaN(basico) || isNaN(ventas) || isNaN(prestamos)) {
    err.textContent = 'Complete todos los campos con valores validos.'; err.classList.add('show'); return;
  }
  err.classList.remove('show'); err.textContent = '';
 
  // Auxilio si el basico esta entre 1 y 3 SMLV
  var auxilio;
  if (basico >= SMLV && basico <= 3 * SMLV) { auxilio = AUXILIO; } else { auxilio = 0; }
 
  var comision = ventas * 0.02;                      // comision del 2%
  var totalDevengado = basico + auxilio + comision;
  var deduccionObligatoria = basico * 0.05;          // 5% obligatorio sobre el basico
  var totalDeducciones = deduccionObligatoria + prestamos;
  var neto = totalDevengado - totalDeducciones;
 
  vendedores.push({ cedula:cedula, nombre:nombre, codigo:codigo,
                    basico:basico, auxilio:auxilio, comision:comision,
                    prestamos:prestamos, neto:neto });
  renderVendedores();
 
  ['cedula','nombre','codigo','basico','ventas','prestamos'].forEach(function(id){
    document.getElementById(id).value = '';
  });
  document.getElementById('cedula').focus();
}
 
function renderVendedores(){
  var tbody = document.getElementById('tbody');
  tbody.innerHTML = '';
  vendedores.forEach(function(v){
    var tr = document.createElement('tr');
    tr.innerHTML =
      '<td class="left">' + v.cedula + '</td>' +
      '<td class="left">' + v.nombre + '</td>' +
      '<td class="left">' + v.codigo + '</td>' +
      '<td>' + fmtPesos(v.basico) + '</td>' +
      '<td>' + fmtPesos(v.auxilio) + '</td>' +
      '<td>' + fmtPesos(v.comision) + '</td>' +
      '<td>' + fmtPesos(v.prestamos) + '</td>' +
      '<td class="neto">' + fmtPesos(v.neto) + '</td>';
    tbody.appendChild(tr);
  });
  document.getElementById('tabla').classList.toggle('show', vendedores.length > 0);
  document.getElementById('counter').textContent =
    vendedores.length ? ('Vendedores registrados: ' + vendedores.length) : '';
}
 
function limpiarVendedores(){ vendedores = []; renderVendedores(); }