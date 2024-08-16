function capture() {
    html2canvas(document.body).then(canvas => {
      let a = document.createElement("a");
      a.download = "clima.png";
      a.href = canvas.toDataURL("image/png");
      a.click(); // Puede que no siempre funcione debido a restricciones de seguridad.
    });
  }
