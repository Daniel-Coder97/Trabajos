const inputCodigo = document.getElementById("codigo");

// Bloquear pegar contenido
inputCodigo.addEventListener("paste", function(e) {
    e.preventDefault();
});

// Limpiar y validar los caracteres ingresados
inputCodigo.addEventListener("input", function() {
    let valor = this.value;

    // Permitir solamente números
    valor = valor.replace(/[^0-9]/g, "");

    // Actualizar el input
    this.value = valor;
});


const inputn1 = document.getElementById("n1");

// Bloquear pegar contenido
inputn1.addEventListener("paste", function(e) {
    e.preventDefault();
});

// Limpiar y validar los caracteres ingresados
inputn1.addEventListener("input", function() {
    let valor = this.value;

    // Permitir únicamente números y puntos
    valor = valor.replace(/[^0-9.]/g, "");

    // Evitar que el punto sea el primer carácter
    if (valor.startsWith(".")) {
        valor = valor.substring(1);
    }

    // Evitar más de un punto decimal
    let partes = valor.split(".");

    if (partes.length > 2) {
        valor = partes[0] + "." + partes[1];
    }

    // Limitar a un solo decimal
    partes = valor.split(".");

    if (partes[1]) {
        valor = partes[0] + "." + partes[1].slice(0, 1);
    }

    // Validar rango de 1 a 5
    if (valor !== "" && !valor.endsWith(".")) {
        let numero = Number(valor);

        if (numero < 1 || numero > 5) {
            valor = valor.slice(0, -1);
        }
    }

    // Actualizar el input
    this.value = valor;
});

const inputn2 = document.getElementById("n2");

// Bloquear pegar contenido
inputn2.addEventListener("paste", function(e) {
    e.preventDefault();
});

// Limpiar y validar los caracteres ingresados
inputn2.addEventListener("input", function() {
    let valor = this.value;

    // Permitir únicamente números y puntos
    valor = valor.replace(/[^0-9.]/g, "");

    // Evitar que el punto sea el primer carácter
    if (valor.startsWith(".")) {
        valor = valor.substring(1);
    }

    // Evitar más de un punto decimal
    let partes = valor.split(".");

    if (partes.length > 2) {
        valor = partes[0] + "." + partes[1];
    }

    // Limitar a un solo decimal
    partes = valor.split(".");

    if (partes[1]) {
        valor = partes[0] + "." + partes[1].slice(0, 1);
    }

    // Validar rango de 1 a 5
    if (valor !== "" && !valor.endsWith(".")) {
        let numero = Number(valor);

        if (numero < 1 || numero > 5) {
            valor = valor.slice(0, -1);
        }
    }

    // Actualizar el input
    this.value = valor;
});

const inputn3 = document.getElementById("n3");

// Bloquear pegar contenido
inputn3.addEventListener("paste", function(e) {
    e.preventDefault();
});

// Limpiar y validar los caracteres ingresados
inputn3.addEventListener("input", function() {
    let valor = this.value;

    // Permitir únicamente números y puntos
    valor = valor.replace(/[^0-9.]/g, "");

    // Evitar que el punto sea el primer carácter
    if (valor.startsWith(".")) {
        valor = valor.substring(1);
    }

    // Evitar más de un punto decimal
    let partes = valor.split(".");

    if (partes.length > 2) {
        valor = partes[0] + "." + partes[1];
    }

    // Limitar a un solo decimal
    partes = valor.split(".");

    if (partes[1]) {
        valor = partes[0] + "." + partes[1].slice(0, 1);
    }

    // Validar rango de 1 a 5
    if (valor !== "" && !valor.endsWith(".")) {
        let numero = Number(valor);

        if (numero < 1 || numero > 5) {
            valor = valor.slice(0, -1);
        }
    }

    // Actualizar el input
    this.value = valor;
});
/* ------------------------------------------------------------
   PROBLEMA 4: Matriz M(50,5) de alumnos
   Columnas: codigo, nota1, nota2, nota3, nota_final (promedio)
   ------------------------------------------------------------ */
var M = []; // matriz (arreglo de arreglos)
 
function agregarAlumno(){
  var err = document.getElementById('err');
  var codigo = document.getElementById('codigo').value.trim();
  var n1 = Number(document.getElementById('n1').value);
  var n2 = Number(document.getElementById('n2').value);
  var n3 = Number(document.getElementById('n3').value);
 
  if (!codigo) {
    err.textContent = 'Ingrese el codigo del alumno.';
    err.classList.add('show');
    return;
}

// Control de rango 1.0 a 5.0
if (
    document.getElementById('n1').value.trim() === "" ||
    document.getElementById('n2').value.trim() === "" ||
    document.getElementById('n3').value.trim() === "" ||
    isNaN(n1) || n1 < 1.0 || n1 > 5.0 ||
    isNaN(n2) || n2 < 1.0 || n2 > 5.0 ||
    isNaN(n3) || n3 < 1.0 || n3 > 5.0
) {
    err.textContent = 'Nota invalida: las tres notas deben estar entre 1.0 y 5.0.';
    err.classList.add('show');
    return;
}

err.classList.remove('show');
err.textContent = '';
 
  var final = (n1 + n2 + n3) / 3;
  M.push([codigo, n1, n2, n3, final]);
  renderAlumnos();
 
  ['codigo','n1','n2','n3'].forEach(function(id){ document.getElementById(id).value = ''; });
  document.getElementById('codigo').focus();
}
 
function clasificarAlumno(final){
  if (final === 5.0) return { t:'Aprobado / Maxima', c:'max' };
  if (final >= 3.0 && final <= 5.0) return { t:'Aprobado', c:'apro' };
  if (final >= 2.0 && final <= 2.9) return { t:'Recuperacion', c:'recu' };
  return { t:'Reprobado', c:'rep' };
}
 
function renderAlumnos(){
  var tbody = document.getElementById('tbody');
  tbody.innerHTML = '';
  var aprobados = 0, recuperacion = 0, maxima = 0;
 
  M.forEach(function(f){
    var final = f[4];
    // Conteos (misma logica del algoritmo: la maxima se cuenta aparte)
    if (final >= 3.0 && final <= 5.0) { aprobados++; }
    else if (final >= 2.0 && final <= 2.9) { recuperacion++; }
    if (final === 5.0) { maxima++; }
 
    var cl = clasificarAlumno(final);
    var tr = document.createElement('tr');
    tr.innerHTML =
      '<td>' + f[0] + '</td>' +
      '<td>' + f[1].toFixed(1) + '</td>' +
      '<td>' + f[2].toFixed(1) + '</td>' +
      '<td>' + f[3].toFixed(1) + '</td>' +
      '<td><b>' + final.toFixed(2) + '</b></td>' +
      '<td><span class="tag ' + cl.c + '">' + cl.t + '</span></td>';
    tbody.appendChild(tr);
  });
 
  document.getElementById('cApro').textContent = aprobados;
  document.getElementById('cRecu').textContent = recuperacion;
  document.getElementById('cMax').textContent = maxima;
  document.getElementById('cards').style.display = M.length ? 'grid' : 'none';
  document.getElementById('tabla').classList.toggle('show', M.length > 0);
}
 
function limpiarAlumnos(){ M = []; renderAlumnos(); }