window.addEventListener("beforeinstallprompt", (e) => {
  document.getElementById("beforeinstallprompt").innerHTML =
    "beforeinstallprompt";
  e.prompt();
});

// Hide the install button
window.addEventListener("appinstalled", (evt) => {
  document.getElementById("appinstalled").innerHTML = "appinstalled";
});
