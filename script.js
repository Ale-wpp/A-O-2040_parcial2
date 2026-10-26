/* =====================================================
   PARA EL FORO Y VOLVER ARRIBA
   ===================================================== */


/* Una lista con los 4 personajes */
var testimonios = [
  {
    cita: "“Mi cara y mi voz son mi reputación profesional, y alguien las usó sin mi permiso.”",
    autor: "Diego Martínez 25 años, diseñador UX/UI",
    vive: "Cómo vive: Busca empleo remoto y no sabe cuántas empresas recibieron información falsa con su imagen.",
    foto: "images/foro-1.jpg"
  },
  {
    cita: "“Vi a una persona de mi equipo en pantalla y no era ella.”",
    autor: "Camila Torres 31 años, gerente de proyectos",
    vive: "Cómo vive: Supervisa equipos remotos. Para ella, las videollamadas dejaron de ser prueba suficiente de identidad.",
    foto: "images/foro-2.jpg"
  },
  {
    cita: "“Lo que antes usaba para reconocer a alguien ahora también se puede falsificar.”",
    autor: "Andrés Molina 42 años, director financiero",
    vive: "Cómo vive: Busca empleo remoto y no sabe cuántas empresas recibieron información falsa con su imagen.",
    foto: "images/foro-3.jpg"
  },
  {
    cita: "“Soy quien digo ser, pero el sistema dudó de mí.”",
    autor: "Sofía Hernández 22 años, candidata laboral",
    vive: "Cómo vive: Busca su primer empleo y debe demostrar una y otra vez que su identidad es auténtica.",
    foto: "images/foro-4.jpg"
  }
];


var actual = 0;

var cajaTexto = document.getElementById("foroTexto");
var cita = document.getElementById("foroCita");
var autor = document.getElementById("foroAutor");
var vive = document.getElementById("foroVive");
var contador = document.getElementById("foroContador");
var foto = document.getElementById("foroFoto");
var botonAnterior = document.getElementById("btnPrev");
var botonSiguiente = document.getElementById("btnNext");


/* Que muestra el testimonio que le pidamos */
function mostrarTestimonio(numero) {

  // Si pasamos del último, volvemos al primero. Si retrocedemos del primero, vamos al último.
  if (numero < 0) {
    numero = testimonios.length - 1;
  }
  if (numero >= testimonios.length) {
    numero = 0;
  }
  actual = numero;

  // Hacemos que el texto y la foto se desvanezcan
  cajaTexto.classList.add("cambiando");
  foto.classList.add("cambiando");

  // Esperamos un momento y cambiamos el contenido
  setTimeout(function () {
    var t = testimonios[actual];
    cita.textContent = t.cita;
    autor.textContent = t.autor;
    vive.textContent = t.vive;
    contador.textContent = (actual + 1) + "/" + testimonios.length;
    foto.src = t.foto;
    foto.alt = t.autor;

    // Volvemos a mostrar el texto y la foto
    cajaTexto.classList.remove("cambiando");
    foto.classList.remove("cambiando");
  }, 280);
}


/* Qué pasa cuando tocan cada flecha */
botonAnterior.addEventListener("click", function () {
  mostrarTestimonio(actual - 1);
});

botonSiguiente.addEventListener("click", function () {
  mostrarTestimonio(actual + 1);
});


/* AL ABRIR LA PÁGINA mostramos el primer personaje */
cita.textContent = testimonios[0].cita;
autor.textContent = testimonios[0].autor;
vive.textContent = testimonios[0].vive;


/* "VOLVER ARRIBA" */
var botonArriba = document.getElementById("arriba");

botonArriba.addEventListener("click", function (evento) {
  evento.preventDefault();   // evita el salto brusco
  window.scrollTo({ top: 0, behavior: "smooth" });
});
