"use strict";

  const btnMode = document.getElementById("btnMode");


  const setDarkMode = () => {
    document.documentElement.classList.add("dark-mode");


    document.documentElement.style.setProperty("--darkestgreen", "#562C2C");
    document.documentElement.style.setProperty("--green-logo", "#AE432D");
    document.documentElement.style.setProperty("--caribbean", "#F2542D");
    document.documentElement.style.setProperty("--airblue", "#F37751");
    document.documentElement.style.setProperty("--greyblue", "#F49A74");
    document.documentElement.style.setProperty("--periwinkle", "#F5BD98");
    document.documentElement.style.setProperty("--lightperi", "#F5DFBB");
    document.documentElement.style.setProperty("--lavander", "#84AA98");
    document.documentElement.style.setProperty("--beige", "#f5f5dc");


    localStorage.setItem("darkMode", "true");
  };

  const setLightMode = () => {
    document.documentElement.classList.remove("dark-mode");


    document.documentElement.style.setProperty("--darkestgreen", "#453A49"); 
    document.documentElement.style.setProperty("--green-logo", "#005555"); //DarkSlateGray
    document.documentElement.style.setProperty("--caribbean", "#6D3B47"); //wine
    document.documentElement.style.setProperty("--airblue", "#f2542d"); //cinnabar
    document.documentElement.style.setProperty("--lightperi", "#f2542d"); //cinabar
    document.documentElement.style.setProperty("--beige", "#F9DBBD"); //lightorange

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
