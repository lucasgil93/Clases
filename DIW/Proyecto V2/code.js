"use strict";

  const btnMode = document.getElementById("btnMode");


  const setDarkMode = () => {
    document.documentElement.classList.add("dark-mode");

    document.documentElement.style.setProperty("--EnglishViolet", "#453A49");
    document.documentElement.style.setProperty("--Wine", "#6D3B47");
    document.documentElement.style.setProperty("--DarkSlateGray", "#005555");
    document.documentElement.style.setProperty("--Cinnabar", "#F2542D");
    document.documentElement.style.setProperty("--LightOrange", "#F9DBBD");


    localStorage.setItem("darkMode", "true");
  };

  const setLightMode = () => {
    document.documentElement.classList.remove("dark-mode");


    document.documentElement.style.setProperty("--EnglishViolet", "#453A49");
    document.documentElement.style.setProperty("--Wine", "#6D3B47");
    document.documentElement.style.setProperty("--DarkSlateGray", "#005555");
    document.documentElement.style.setProperty("--Cinnabar", "#F2542D");
    document.documentElement.style.setProperty("--LightOrange", "#F9DBBD");

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
