const btnMode = document.getElementById("btnMode");

btnMode.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark-mode");

  if (document.documentElement.classList.contains("dark-mode")) {
    // Dark mode
    document.documentElement.style.setProperty("--bg-color-light", "#000");
    document.documentElement.style.setProperty("--bg-color-dark", "#111");
    document.documentElement.style.setProperty("--text-color-light", "#fff");
    document.documentElement.style.setProperty("--accent-color-light", "#444");
    document.documentElement.style.setProperty("--accent-color-dark", "#666");
    document.documentElement.style.setProperty("--button-bg-color-light", "#444");
    document.documentElement.style.setProperty("--button-bg-color-dark", "#fff");
    document.documentElement.style.setProperty("--button-text-color", "#000");
  } else {
    // Light mode
    document.documentElement.style.setProperty("--bg-color-light", "#003535");
    document.documentElement.style.setProperty("--bg-color-dark", "#005555");
    document.documentElement.style.setProperty("--text-color-light", "beige");
    document.documentElement.style.setProperty("--accent-color-light", "#578494");
    document.documentElement.style.setProperty("--accent-color-dark", "#B4B9D7");
    document.documentElement.style.setProperty("--button-bg-color-light", "#578494");
    document.documentElement.style.setProperty("--button-bg-color-dark", "#003535");
    document.documentElement.style.setProperty("--button-text-color", "beige");
  }
});
