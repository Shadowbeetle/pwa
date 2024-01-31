window.addEventListener("beforeinstallprompt", (e) => {
  document.getElementById("beforeinstallprompt").innerHTML = "✔️";
  e.prompt();
});

// Hide the install button
window.addEventListener("appinstalled", (evt) => {
  document.getElementById("appinstalled").innerHTML = "✔️";
});
