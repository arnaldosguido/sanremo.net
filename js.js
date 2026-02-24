document.addEventListener("DOMContentLoaded", () => {
  const shareButtons = document.querySelectorAll(".pill-share");

  shareButtons.forEach(btn => {
    btn.addEventListener("click", async () => {
      try {
        const url = window.location.href;
        await navigator.clipboard.writeText(url);
        alert("Link copiato, incollalo dove vuoi");
      } catch (err) {
        alert("Impossibile copiare il link");
      }
    });
  });
});