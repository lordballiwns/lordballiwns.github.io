const countdownElement = document.getElementById('countdown');

function updateCountdown() {
    const now = new Date();
    const nextMonday = new Date(now);
    nextMonday.setDate(now.getDate() + (1 + 7 - now.getDay()) % 7); // Calcula el próximo lunes
    nextMonday.setHours(0, 0, 0, 0); // Establece la hora a las 00:00

    const timeLeft = nextMonday - now;
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${days} días ${hours} horas ${minutes} minutos ${seconds} segundos`;
}

setInterval(updateCountdown, 1000); // Actualiza cada segundo