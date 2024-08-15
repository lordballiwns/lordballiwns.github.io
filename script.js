function copyAccountNumber() {
            const accountNumber = '1271 8001 3023 546289';
            navigator.clipboard.writeText(accountNumber)
                .then(() => alert('Número de cuenta copiado: ' + accountNumber))
                .catch(error => console.error('Error al copiar el número de cuenta:', error));
        }