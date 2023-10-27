"use strict";

  const btnMode = document.getElementById("btnMode");

  // Function to set dark mode CSS variables
  const setDarkMode = () => {
    document.documentElement.classList.add("dark-mode");

    // Dark mode variables
    document.documentElement.style.setProperty("--darkestgreen", "#562C2C");
    document.documentElement.style.setProperty("--darkergreen", "#A4402D");
    document.documentElement.style.setProperty("--green-logo", "#AE432D");
    document.documentElement.style.setProperty("--caribbean", "#F2542D");
    document.documentElement.style.setProperty("--airblue", "#F37751");
    document.documentElement.style.setProperty("--greyblue", "#F49A74");
    document.documentElement.style.setProperty("--periwinkle", "#F5BD98");
    document.documentElement.style.setProperty("--lightperi", "#F5DFBB");
    document.documentElement.style.setProperty("--lighterperi", "#84AA98");
    document.documentElement.style.setProperty("--lightestperi", "#127475");
    document.documentElement.style.setProperty("--lavander", "#C7CAE1");
    document.documentElement.style.setProperty("--lightlavender", "#CCCFE4");
    document.documentElement.style.setProperty("--beige", "#f5f5dc");

    // Save dark mode state to local storage
    localStorage.setItem("darkMode", "true");
  };

  // Function to set light mode CSS variables
  const setLightMode = () => {
    document.documentElement.classList.remove("dark-mode");

    // Light mode variables
    document.documentElement.style.setProperty("--darkestgreen", "#003535");
    document.documentElement.style.setProperty("--darkergreen", "#004D4D");
    document.documentElement.style.setProperty("--green-logo", "#005555");
    document.documentElement.style.setProperty("--caribbean", "#2C6D75");
    document.documentElement.style.setProperty("--airblue", "#578494");
    document.documentElement.style.setProperty("--greyblue", "#829BB4");
    document.documentElement.style.setProperty("--periwinkle", "#ADB2D3");
    document.documentElement.style.setProperty("--lightperi", "#B4B9D7");
    document.documentElement.style.setProperty("--lighterperi", "#BBBFDB");
    document.documentElement.style.setProperty("--lightestperi", "#C1C5DE");
    document.documentElement.style.setProperty("--lavander", "#C7CAE1");
    document.documentElement.style.setProperty("--lightlavender", "#CCCFE4");
    document.documentElement.style.setProperty("--beige", "#f5f5dc");

    // Save light mode state to local storage
    localStorage.setItem("darkMode", "false");
  };

  btnMode.addEventListener("click", () => {
    if (document.documentElement.classList.contains("dark-mode")) {
      setLightMode();
    } else {
      setDarkMode();
    }
  });

  // Check local storage for dark mode state
  const isDarkMode = localStorage.getItem("darkMode");
  if (isDarkMode === "true") {
    setDarkMode();
  } else {
    setLightMode();
  }
