document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value;
  alert(`Welcome back, user with email: ${email}`);
});

document.getElementById("registerForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("registerName").value;
  const phone = document.getElementById("registerPhone").value;
  alert(`Thank you for registering, ${name}! We will contact you at ${phone}.`);
});
