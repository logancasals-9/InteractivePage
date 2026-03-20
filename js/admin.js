const params = new URLSearchParams(window.location.search);
const usuario = params.get("usuario");
if (usuario) {
    document.getElementById("userDetails").textContent = usuario;
    document.getElementById("mensajebienvenida").textContent = `Bienvenido/a, ${usuario}`;
} else {
    document.getElementById("mensajebienvenida").textContent = "Bienvenido/a, Administrador";
}
