document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const notification = document.getElementById('notification');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Simulación de envío de formulario
        setTimeout(function() {
            showNotification('Mensaje enviado con éxito!');
            form.reset();
        }, 1000);
    });

    function showNotification(message) {
        notification.textContent = message;
        notification.style.display = 'block';

        setTimeout(function() {
            notification.style.display = 'none';
        }, 3000);
    }
});

window.onload = function(){
    $('#onload').fadeOut();
    $('body').removeClass('hidden');
}