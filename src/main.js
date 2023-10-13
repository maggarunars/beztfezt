"use strict";
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
document.addEventListener('DOMContentLoaded', function () {
    const iconHeart = document.getElementById('heart');
    if (iconHeart) {
        iconHeart.addEventListener('click', function () {
            // Change the color to red when clicked
            iconHeart.style.backgroundColor = 'red';
        });
    }
});
// document.addEventListener('DOMContentLoaded', function () {
//     const icon = document.getElementById('icon') as HTMLElement;
//     if (icon) {
//         icon.addEventListener('click', function () {
//             // Change the color to red when clicked
//             icon.style.color = '#F9994E';
//         });
//     }
// });
document.addEventListener('DOMContentLoaded', function () {
    const icon = document.getElementById('icon');
    if (icon) {
        icon.addEventListener('click', function () {
            // Check the current color
            const currentColor = icon.style.color;
            // If the current color is not red, set it to red; otherwise, set it to the original color
            if (currentColor !== 'rgb(249, 153, 78)' && currentColor !== '#F9994E') {
                // Change the color to red
                icon.style.color = '#F9994E';
            }
            else {
                // Set it to the original color (you need to replace 'originalColor' with the actual original color)
                icon.style.color = 'white';
            }
        });
    }
});
// const heartColor = document.querySelectorAll<HTMLElement>("#heart")
// function color(heart: HTMLElement)
// const iconsText = document.querySelectorAll("#color p")
// function fontColorChange(text){
//     for (let i = 0; i < daysText.length; i++){
//             icons[i].style.backgroundColor = "#264653"
//         }
//         text.style.color = "#264653";
// }
