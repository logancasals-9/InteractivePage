document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const usuario = document.getElementById("usuario").value;
    const password = document.getElementById("contraseña").value;
    const errorMessage = document.getElementById("errorMessage");

    if (usuario === "mel" && password === "123") {
        var url = "admin.html?usuario="+ usuario;
        window.location.href=url;
    } else {
        errorMessage.textContent = "Usuario incorrecto";
    }
});