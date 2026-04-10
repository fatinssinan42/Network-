const searchInput = document.getElementById("searchInput");
const panels = Array.from(document.querySelectorAll(".searchable"));
const themeToggle = document.getElementById("themeToggle");

function applyFilter(term) {
  const q = term.trim().toLowerCase();
  panels.forEach((panel) => {
    const text = panel.textContent.toLowerCase();
    panel.classList.toggle("hidden", q.length > 0 && !text.includes(q));
  });
}

searchInput.addEventListener("input", (e) => applyFilter(e.target.value));

const savedTheme = localStorage.getItem("network-theme");
if (savedTheme === "light") {
  document.body.classList.add("light");
  themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  const isLight = document.body.classList.contains("light");
  themeToggle.textContent = isLight ? "☀️" : "🌙";
  localStorage.setItem("network-theme", isLight ? "light" : "dark");
});
