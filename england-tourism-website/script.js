setInterval(() => {
  const now = new Date().toLocaleTimeString("en-GB", { timeZone: "Europe/London" });
  const clock = document.getElementById("clock");
  if (clock) clock.textContent = now;
}, 1000);

function toggle(id) {
  const panel = document.getElementById(id);
  panel.style.display = panel.style.display === "block" ? "none" : "block";
}

function calculate(event) {
  event.preventDefault();
  const days = parseInt(document.getElementById("days").value);
  const budget = parseInt(document.getElementById("budget").value);
  if (!isNaN(days) && !isNaN(budget)) {
    document.getElementById("result").textContent = `Estimated cost: £${days * budget}`;
  } else {
    document.getElementById("result").textContent = "Please enter valid numbers.";
  }
}