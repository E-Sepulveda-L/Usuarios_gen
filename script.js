document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("crearUsuarioForm");
    
    formulario.addEventListener("submit", function (event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const correo = document.getElementById("correo").value;
        const contraseña = document.getElementById("contraseña").value;

        const nuevoUsuario = new Usuario(nombre, correo, contraseña);

        console.log("Usuario creado:", nuevoUsuario);
    });
});

class Usuario {
    constructor(nombre, correo, contraseña) {
        this.nombre = nombre;
        this.correo = correo;
        this.contraseña = contraseña;
        this.amigos = [];
        this.publicaciones = [];
    }
}
