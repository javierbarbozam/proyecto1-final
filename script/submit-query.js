// Inicializa EmailJS con tu User ID
emailjs.init("IOZ7SoMuWrZxEtgz9");

// Manejador de envío de formulario
document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevenir el envío predeterminado del formulario

  // Obtener valores del formulario
  const form = event.target;
  const name = form.name.value;
  const phone = form.phone.value
  const email = form.email.value;
  const message = form.message.value;

  // Enviar correo electrónico utilizando EmailJS
  emailjs.send("service_64225v6", "template_nnt60z8", {
    from_name: name,
    from_email: email,
    from_phone: phone,
    message: message,
  })
  .then(function(response) {
    console.log("Correo electrónico enviado:", response.status, response.text);
    alert("¡Gracias por tu mensaje! Te responderemos lo antes posible.");
    form.reset(); // Limpiar formulario después del envío
  }, function(error) {
    console.log("Error al enviar correo electrónico:", error);
    alert("Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.");
  });
});