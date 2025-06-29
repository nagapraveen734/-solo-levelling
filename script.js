document.addEventListener("DOMContentLoaded", () => {
  const userEmail = localStorage.getItem("userEmail") || "guest@example.com";
  document.getElementById("user-email").textContent = userEmail;

  if (userEmail === "nagapraveenvivot3x@gmail.com") {
    // Reveal admin tools if needed
    console.log("Admin Mode Activated");
  }

  // Sample functionality — expand this as needed
  console.log("Page Loaded");
});
