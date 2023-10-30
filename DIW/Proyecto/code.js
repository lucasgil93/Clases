"use strict";

  const btnMode = document.getElementById("btnMode");


  const setDarkMode = () => {
    document.documentElement.classList.add("dark-mode");


    document.documentElement.style.setProperty("--darkest", "#FFEBEB");
    document.documentElement.style.setProperty("--dark", "#ADFFFF");
    document.documentElement.style.setProperty("--medium", "#00CCCC"); //wine
    document.documentElement.style.setProperty("--light", "#6D3B47"); //cinnabar
    document.documentElement.style.setProperty("--lighter", "#005555"); //cinabar
    document.documentElement.style.setProperty("--lightest", "#003535"); //lightorange
    document.documentElement.style.setProperty("--accent", "#F9DBBD"); 


    localStorage.setItem("darkMode", "true");
  };

  const setLightMode = () => {
    document.documentElement.classList.remove("dark-mode");


    document.documentElement.style.setProperty("--darkest", "#003535");
    document.documentElement.style.setProperty("--dark", "#005555");
    document.documentElement.style.setProperty("--medium", "#409CA9"); 
    document.documentElement.style.setProperty("--light", "#D1CCBB"); 
    document.documentElement.style.setProperty("--lighter", "#F69875"); 
    document.documentElement.style.setProperty("--lightest", "#FAE2CB"); 
    document.documentElement.style.setProperty("--accent", "#F47656"); 

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
