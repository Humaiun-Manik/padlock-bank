document.getElementById("login_btn").addEventListener("click", function () {
  // get user email
  const emailField = document.getElementById("user_email");
  const userEmail = emailField.value;
  emailField.value = "";

  //   get user password
  const passwordField = document.getElementById("user_password");
  const userPassword = passwordField.value;
  passwordField.value = "";

  if (userEmail == "padlock@bank.com" && userPassword == "padlock") {
    window.location.href = "banking.html";
  }
});
