// JavaScript untuk menangani klik email
document.getElementById("emailButton").addEventListener("click", function() {
  const email = "wasaraadyatma@gmail.com";
  const subject = "Hello from My Linktree";
  const body = "I hope this message finds you well!";
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  // Membuka aplikasi email default
  window.location.href = mailtoLink;
});