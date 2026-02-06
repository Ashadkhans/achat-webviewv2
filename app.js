function saveUser() {
  const name = document.getElementById("username").value;
  const age = document.getElementById("age").value;

  if (name === "" || age === "") {
    alert("Fill all fields");
    return;
  }

  // Temporary save (Firebase next step)
  localStorage.setItem("username", name);
  localStorage.setItem("age", age);

  alert("User saved: " + name);

  // Next step: load home UI
}
