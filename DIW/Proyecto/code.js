"use strict";

  const btnMode = document.getElementById("btnMode");


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

