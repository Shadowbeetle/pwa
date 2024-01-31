let deferredPrompt;
window.addEventListener("beforeinstallprompt", (e) => {
  document.getElementById("beforeinstallprompt").innerHTML = "✔️";
  deferredPrompt = e;
});

// Hide the install button
window.addEventListener("appinstalled", (evt) => {
  document.getElementById("appinstalled").innerHTML = "✔️";
});

document.getElementById("install").addEventListener("click", (e) => {
  deferredPrompt.prompt();
});
