function guardar() {
    let nombre = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let edad = document.getElementById("edad").value;

    let dataUser = { 'name': nombre, 'email': email, 'age': edad};
    localStorage.setItem("data", JSON.stringify(dataUser));
}

function mostrarDatos() {
    let datosUsuario = JSON.parse(localStorage.getItem("data"));
    console.log("+++++++", datosUsuario.name);
}