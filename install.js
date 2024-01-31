window.addEventListener("beforeinstallprompt", (e) => {
  alert("beforeinstallprompt fired");
});

// Hide the install button
window.addEventListener("appinstalled", (evt) => {
  alert("appinstalled fired");
});
