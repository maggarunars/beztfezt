"use strict";
// This is the dropdown and toggle function for the Filter Menu Bar 
function toggleDropdown() {
    let dropdown = document.querySelector("#dropdownButton #dropdown");
    dropdown.classList.toggle("hidden");
}
const icons = document.querySelectorAll("#dropdown div");
// console.log(icons)
function colorChange(iconBtn) {
    console.log(iconBtn);
    for (let i = 0; i < icons.length; i++) {
        icons[i].style.backgroundColor = "#264653";
    }
    iconBtn.style.backgroundColor = "#F9994E";
}
