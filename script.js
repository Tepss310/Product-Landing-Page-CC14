document.getElementById("buyBtn").addEventListener("click", () => {
  alert("Opening Army Navy menu...");
});

document.querySelectorAll(".orderBtn").forEach(b => b.onclick = () => alert("Added to cart!"));