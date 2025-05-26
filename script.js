document.addEventListener("DOMContentLoaded", () => {
  const regForm = document.getElementById("registrationForm");
  const loginForm = document.getElementById("loginForm");
  const requestForm = document.getElementById("requestForm");
  const eligibilityForm = document.getElementById("eligibilityForm");

  if (regForm) {
    regForm.addEventListener("submit", e => {
      e.preventDefault();
      alert("Registration successful!");
    });
  }

  if (loginForm) {
    loginForm.addEventListener("submit", e => {
      e.preventDefault();
      alert("Login successful!");
      window.location.href = "index.html"; // simulate dashboard
    });
  }

  if (requestForm) {
    requestForm.addEventListener("submit", e => {
      e.preventDefault();
      alert("Emergency request posted!");
    });
  }

  if (eligibilityForm) {
    eligibilityForm.addEventListener("submit", e => {
      e.preventDefault();
      const lastDonation = document.getElementById("lastDonation").value;
      const result = lastDonation === "no"
        ? "You are eligible to donate blood."
        : "Please wait 3 months before donating again.";
      document.getElementById("eligibilityResult").textContent = result;
    });
  }
});
