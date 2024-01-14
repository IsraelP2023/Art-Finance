// script.js

<script>
    document.getElementById('contactForm').addEventListener('submit', function(event){
        event.preventDefault(); // Previene el envío tradicional del formulario

        var nombre = document.getElementById('nombre').value;
        var email = document.getElementById('email').value;
        var mensaje = document.getElementById('mensaje').value;

        // Aquí puedes hacer lo que necesites con los datos, como enviarlos a una API
        // Por ahora, solo mostraré una alerta
        alert("Gracias, " + nombre + ". Tu mensaje ha sido enviado.");

        // Opcional: Limpia el formulario después del envío
        document.getElementById('contactForm').reset();
    });
</script>
