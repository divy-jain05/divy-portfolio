// Show current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Contact form handler
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();
  const formMsg = document.getElementById("formMsg");

  if (!name || !email || !subject || !message) {
    formMsg.textContent = "Please fill all fields.";
    return;
  }

  const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  if (!emailRegex.test(email)) {
    formMsg.textContent = "Enter a valid email.";
    return;
  }

  // Open mail client
  const mailto = `mailto:your.email@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("Name: " + name + "\\nEmail: " + email + "\\n\\n" + message)}`;
  window.location.href = mailto;
  formMsg.textContent = "Opening your email client...";
});