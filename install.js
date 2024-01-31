window.addEventListener("beforeinstallprompt", (e) => {
  alert("beforeinstallprompt fired");
  e.prompt();
});

// Hide the install button
window.addEventListener("appinstalled", (evt) => {
  alert("appinstalled fired");
});
