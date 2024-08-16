function cambiarFondoSegunHora() {
            const horaActual = new Date().getHours();
            const body = document.body;

            if (horaActual >= 6 && horaActual < 12) {
                body.style.background = 'linear-gradient(-10deg, #23A6D5, #23D5AB)';
            } else if (horaActual >= 12 && horaActual < 18) {
                body.style.background = 'linear-gradient(-10deg, #23A6D5, #EE7752)';
            } else if (horaActual >= 18 && horaActual < 20) {
                body.style.background = 'linear-gradient(-10deg, #23A6D5, #E73C7E)';
            } else {
                body.style.background = 'linear-gradient(-10deg, #000055, #000022)';
            }
        }

        // Llama a la función al cargar la página
        cambiarFondoSegunHora();