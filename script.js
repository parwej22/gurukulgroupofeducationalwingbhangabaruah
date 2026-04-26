/* MOBILE MENU */
function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("active");
}

/* DROPDOWN FIX (WORKING 100%) */
function toggleDropdown(btn) {
  let dropdown = btn.nextElementSibling;
  dropdown.classList.toggle("show");
}

/* CLOSE WHEN CLICK OUTSIDE */
window.addEventListener("click", function(e) {
  if (!e.target.matches('.dropbtn')) {
    let dropdowns = document.querySelectorAll(".dropdown-content");
    dropdowns.forEach(d => d.classList.remove("show"));
  }
});
