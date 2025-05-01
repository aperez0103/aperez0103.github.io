// Contact Form w bootstrap styles (see index.html) //
function contactForm(event) {
  event.preventDefault();

  Name = document.getElementById("name").value;
  email = document.getElementById("email").value;
  message = document.getElementById("message").value;

  output = document.getElementById("responseMessage");
  output.textContent = "We've received your message! Thank you, " + Name + ". Response times vary. Please check your email (" + email + ") for confirmation.";
  output.style.display = "block"; 


}

// Theme Changer //
function changeTheme(event) {
  event.preventDefault();
  color = document.getElementById("theme").value;

  if (color === "Default") {
    color = "black";
  }

  document.querySelector("header").style.backgroundColor = color;
  document.querySelector("footer").style.backgroundColor = color;
}

//Font Changer //
function changeFont(event) {
  event.preventDefault();
  font = document.getElementById("font").value;
  
  if (font === "Default") {
    font = "Arial, sans-serif";
  }

  document.body.style.fontFamily = font;
}
  