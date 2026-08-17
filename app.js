document.getElementById("build").textContent = new Date().toISOString();

let n = 0;
document.getElementById("btn").addEventListener("click", () => {
  n += 1;
  document.getElementById("out").textContent = `Clicks: ${n}`;
});
