auth.onAuthStateChanged(user => {
  if (user) {
    // Display user info
    localStorage.setItem("userEmail", user.email);
    document.getElementById("user-email").textContent = user.email;
    document.getElementById("login-form").classList.add("hidden");
    document.getElementById("logout-button").classList.remove("hidden");

    // Show admin panel if admin
    if (user.email === "nagapraveenvivot3x@gmail.com") {
      document.getElementById("admin-panel").classList.remove("hidden");
    }

    // 👉 Skill selection logic
    const skillSection = document.getElementById("skill-section");
    const skillForm = document.getElementById("skill-form");
    const customSkillInput = document.getElementById("custom-skill");

    skillSection.classList.remove("hidden");

    skillForm.onsubmit = (e) => {
      e.preventDefault();
      const selectedSkills = Array.from(skillForm.querySelectorAll("input[type='checkbox']:checked")).map(i => i.value);
      const customSkill = customSkillInput.value.trim();
      if (customSkill) selectedSkills.push(customSkill);

      localStorage.setItem("skills", JSON.stringify(selectedSkills));
      alert("Skills Saved! Let's begin your journey...");
      location.reload(); // reload to continue
    };
  } else {
    // Show login if not signed in
    document.getElementById("login-form").classList.remove("hidden");
    document.getElementById("logout-button").classList.add("hidden");
  }
});
