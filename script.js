function handleLogin() {
  const username = document.getElementById('jafar').value;
  const password = document.getElementById('oli').value;

  // Example: Log values or validate
  if (username === "admin" && password === "1234") {
    alert("Login successful!");
  } else {
    alert("Invalid username or password.");
  }
}
