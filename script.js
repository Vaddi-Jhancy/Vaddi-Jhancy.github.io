// Auto year update
document.getElementById("year").textContent = new Date().getFullYear();

// Expand/Collapse lists
function toggleList(element) {
  const ul = element.nextElementSibling;
  ul.style.display = ul.style.display === "block" ? "none" : "block";
}


function toggleReadMore(btn) {
  const hidden = btn.previousElementSibling.querySelector('.hidden-content');
  if (hidden.style.display === "none" || hidden.style.display === "") {
    hidden.style.display = "inline";
    // hidden.style.display = "block";
    btn.textContent = "Read less ";
  } else {
    hidden.style.display = "none";
    btn.textContent = "Read more";
  }
}