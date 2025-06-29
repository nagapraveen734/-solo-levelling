auth.onAuthStateChanged(user => {
  if (user) {
    localStorage.setItem("userEmail", user.email);
    document.getElementById("user-email").textContent = user.email;
    document.getElementById("login-form").classList.add("hidden");
    document.getElementById("logout-button").classList.remove("hidden");

    if (user.email === "nagapraveenvivot3x@gmail.com") {
      document.getElementById("admin-panel").classList.remove("hidden");
    }
  } else {
    document.getElementById("login-form").classList.remove("hidden");
    document.getElementById("logout-button").classList.add("hidden");
  }
});
