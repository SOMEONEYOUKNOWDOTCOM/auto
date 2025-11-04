function handleLogin() {
  const usernameInput = document.getElementById('jafar').value;
  const username = usernameInput.toLowerCase();
  const password = document.getElementById('oli').value;
  const message = document.getElementById('bro');

  if (username === "admin" && password === "1234") {
    message.textContent = "Login successful!";
    message.style.display = "block";
    message.style.color = "limegreen";
  } else {
    message.textContent = "Invalid username or password.";
    message.style.display = "block";
    message.style.color = "red";
  }
}
