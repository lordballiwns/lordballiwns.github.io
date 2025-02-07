document.addEventListener("DOMContentLoaded", function() {
    // Establecer el tiempo final para la cuenta regresiva
    var countdownDate = new Date("Nov 1, 2025 00:00:00").getTime();

    // Actualizar la cuenta regresiva cada 1 segundo
    var x = setInterval(function() {

        // Obtener la fecha y hora de ahora
        var now = new Date().getTime();

        // Encontrar la distancia entre ahora y la fecha de cuenta regresiva
        var distance = countdownDate - now;

        // Cálculos de tiempo para días, horas, minutos y segundos
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Mostrar el resultado en el elemento con id="countdown"
        document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

        // Si la cuenta regresiva termina, mostrar un mensaje
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "¡LLEGÓ EL DÍA!";
        }
    }, 1000);
});