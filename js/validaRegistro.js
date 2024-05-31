
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('form').addEventListener('submit', function (event) {
        // Obtener valores de los campos de entrada
        var nombre = document.getElementById('nombre').value;
        var apellido = document.getElementById('apellido').value;
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        var fechaNacimiento = document.getElementById('fechaNacimiento').value;
        var pais = document.getElementById('pais').value;
        var terminos = document.getElementById('terminos').checked;

        // Verificar si los campos están vacíos o no seleccionados
        if (nombre === "" || apellido === "" || email === "" || password === "" || fechaNacimiento === "" || pais === "" || !terminos) {
            event.preventDefault(); // Evitar el envío del formulario
            alert("Por favor, complete todos los campos y acepte los términos y condiciones.");
        }
    });
});