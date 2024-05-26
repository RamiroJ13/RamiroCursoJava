document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('loginForm').addEventListener('submit', function (event) {
         
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        // Verificar si los campos están vacíos
        if (email === "" || password === "") {
            console.log('El formulario no es válido. Por favor, corrige los errores.');
            event.preventDefault(); 
            alert("Por favor, complete ambos campos antes de iniciar sesión.");
        }
    });
});
