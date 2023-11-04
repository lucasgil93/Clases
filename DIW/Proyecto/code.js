"use strict";

const btnMode = document.getElementById("btnMode");

let divModos = document.getElementById("divModos");


const setDarkMode = () => {
  document.documentElement.classList.add("dark-mode");

  document.documentElement.style.setProperty("--darkheader", "#579A9A");
  document.documentElement.style.setProperty("--darkest", "#EBFFFF"); //lighterblue
  document.documentElement.style.setProperty("--dark", "#ADFFFF"); //lightblue
  document.documentElement.style.setProperty("--medium", "#00CCCC");
  document.documentElement.style.setProperty("--light", "#6D3B47");
  document.documentElement.style.setProperty("--lighter", "#005555");
  document.documentElement.style.setProperty("--lightest", "#003535");
  document.documentElement.style.setProperty("--accent", "#F9DBBD");

  divModos.innerHTML = `  <button type="button" id="btnMode" onclick="setLightMode()"><svg xmlns="http://www.w3.org/2000/svg"
  class="icon icon-tabler icon-tabler-sun" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
  stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
  <path
      d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7">
  </path>
</svg></button>`



  localStorage.setItem("darkMode", "true");
};

const setLightMode = () => {
  document.documentElement.classList.remove("dark-mode");

  document.documentElement.style.setProperty("--darkheader", "#003535");
  document.documentElement.style.setProperty("--darkest", "#003535");
  document.documentElement.style.setProperty("--dark", "#005555");
  document.documentElement.style.setProperty("--medium", "#409CA9");
  document.documentElement.style.setProperty("--light", "#D1CCBB");
  document.documentElement.style.setProperty("--lighter", "#ADFFFF");
  document.documentElement.style.setProperty("--lightest", "#EBFFFF");
  document.documentElement.style.setProperty("--accent", "#F47656");

  
  divModos.innerHTML = `  <button type="button" id="btnMode" onclick="setDarkMode()"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-moon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path>
 </svg></button>`


  localStorage.setItem("darkMode", "false");
};

btnMode.addEventListener("click", () => {
  if (document.documentElement.classList.contains("dark-mode")) {
    setLightMode();
  } else {
    setDarkMode();
  }
});

const isDarkMode = localStorage.getItem("darkMode");
if (isDarkMode === "true") {
  setDarkMode();
} else {
  setLightMode();
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});