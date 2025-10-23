document.addEventListener("DOMContentLoaded", () => {
  const modeToggle = document.getElementById("mode");
  const textElements = document.querySelectorAll(".text");

  modeToggle.addEventListener("click", () => {
    alert("Toggle clicked!");

    const isDark = getComputedStyle(document.body).backgroundColor === "rgb(0, 0, 0)";

    if (isDark) {
      document.body.style.backgroundColor = "white";
      textElements.forEach(el => el.style.color = "black");
      modeToggle.textContent = "Light Mode";
    } else {
      document.body.style.backgroundColor = "black";
      textElements.forEach(el => el.style.color = "white");
      modeToggle.textContent = "Dark Mode";
    }
  });
});
