
document.getElementById("payButton").addEventListener("click", funcion() {
    alert("redirigiendo al pago...");
  window.location.href = "https://www.ejemplo.com/pago"; //reeplaza con url.
});

document.getElementById("payButton").addEventListener("click", function() {
    Swal.fire({
        title: "¿Confirmas tu pago?",
        text: "Serás redirigido a la plataforma de pagos.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#28a745",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, pagar",
        cancelButtonText: "Cancelar"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire("Pago exitoso!", "Serás redirigido ahora.", "success");
            window.location.href = "https://www.ejemplo.com/pago"; // Reemplaza con tu pasarela de pago.
        }
    });
});