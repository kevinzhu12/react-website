export const toggleColorMode = () => {
  let theme = localStorage.getItem("mbz-color-mode");
  const systemIsDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  if (theme === "dark") {
    lightMode();
  } else if (theme === "light" || theme === "yellow" || theme === "green") {
    darkMode();
  } else if (systemIsDark) {
    lightMode();
  } else {
    darkMode();
  }
};

export const toggleTextMode = () => {
  let mode = localStorage.getItem("mbz-view-mode");

  if (mode === "text") {
    setImageMode();
  } else {
    setTextMode();
  }
};

const setTextMode = () => {
  document.getElementById("text-mode-toggle").innerHTML = "Image Mode";
  document.documentElement.setAttribute("mode", "text");
  localStorage.setItem("mbz-view-mode", "text");
  document
    .querySelectorAll(".col-md-8")
    .forEach((el) => el.classList.remove("col-md-8"));
};

const setImageMode = () => {
  document.getElementById("text-mode-toggle").innerHTML = "Text Mode";
  document.documentElement.setAttribute("mode", "image");
  localStorage.setItem("mbz-view-mode", "image");
  document
    .querySelectorAll(".col-md-8")
    .forEach((el) => el.classList.add("col-md-8"));
};

const darkMode = () => {
  document.documentElement.setAttribute("theme", "dark");
  localStorage.setItem("mbz-color-mode", "dark");
};

const lightMode = () => {
  document.documentElement.setAttribute("theme", "light");
  localStorage.setItem("mbz-color-mode", "light");
};

const yellowMode = () => {
  document.documentElement.setAttribute("theme", "yellow");
  localStorage.setItem("mbz-color-mode", "yellow");
};

const greenMode = () => {
  document.documentElement.setAttribute("theme", "green");
  localStorage.setItem("mbz-color-mode", "green");
};

// Initial theme setup
let theme = localStorage.getItem("mbz-color-mode");
const systemIsDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (theme === "dark") {
  darkMode();
} else if (theme === "light") {
  lightMode();
} else if (theme === "yellow") {
  yellowMode();
} else if (theme === "green") {
  greenMode();
} else if (systemIsDark) {
  darkMode();
} else {
  lightMode();
}
