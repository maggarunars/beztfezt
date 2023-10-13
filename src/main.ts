function toggleDropdown(){
    let dropdown: Element | null = document.querySelector("#dropdownButton #dropdown") as Element
    dropdown.classList.toggle("hidden")
}


const icons = document.querySelectorAll<HTMLDivElement>("#dropdown div")
// console.log(icons)
function colorChange(iconBtn: HTMLDivElement){
    console.log(iconBtn)
        for (let i = 0; i < icons.length; i++){
            icons[i].style.backgroundColor = "#264653"
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


// Wait for the DOM content to be fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function () {
    // Find the element with the ID 'icon' and treat it as an HTMLElement
    const icon = document.getElementById('icon') as HTMLElement;

    // Check if the element with the ID 'icon' exists
    if (icon) {
        // Add a click event listener to the 'icon' element
        icon.addEventListener('click', function () {
            // Check the current color of the 'icon' element
            const currentColor = icon.style.color;

            // If the current color is not red, set it to red
            if (currentColor !== 'rgb(249, 153, 78)' && currentColor !== '#F9994E') {
                // Change the color to orange
                icon.style.color = '#F9994E';
            } else {
                // Set the color back to the original color
                // Note: Replace 'originalColor' with the actual original color value
                icon.style.color = 'originalColor';
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