const formulario = document.querySelector(".formulario");
const mascara = document.querySelector(".mascara-formulario")

function mostrarForm() {
    formulario.style.left = "50%";
    formulario.style.transform = "translatex(-50%)";
    mascara.style.visibility = "visible"
}

function esconderForm() {
    formulario.style.left = "-340px";
    formulario.style.transform = "translatex(0)";
    mascara.style.visibility = "hidden";
}