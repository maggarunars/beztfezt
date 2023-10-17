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
// THIS CREATES THE EVENT LIST ON EVENTS.HTML
document.addEventListener('DOMContentLoaded', function () {
    const eventContainer = document.querySelector("#eventContainer");
    // forEach loop
    events.forEach((event) => {
        // Create a new div for each event
        const eventDiv = document.createElement('div');
        eventDiv.className = "mx-4 mb-4 bg-blue rounded-xl flex justify-between h-40 w-{358px}";
        // Add the event details to the div
        eventDiv.innerHTML = `
        <div class="flex justify-between">   
            <div class="flex flex-col justify-evenly mw-50">
                <div class="px-4">
                    <h2 class="font-bold text-white text-base">${event.yoast_head_json.title}</h2>
                    <h3>${event.acf.stadsetning}</h3>
                </div>
                <div class="flex justify-between px-4 gap-3">
                    <div class="flex items-center"> 
                        <ion-icon class="text-4xl heart-icon" name="heart-outline"></ion-icon>
                        <ion-icon class="text-4xl" name="share-outline"></ion-icon>
                    </div>
                    <div>
                        <p class="flex justify-end">${event.acf.dagsetning}</p>
                    </div>
                </div>
            </div>
            <div>        
                <img class="rounded-xl h-40 w-40" src="${event.yoast_head_json.og_image[0].url}" alt=""> 
            </div>
        </div>
        `;
        // Add the new div to the event container
        eventContainer.appendChild(eventDiv);
        // defining the heart and fetching the icons that should change. 
        const heart = eventDiv.querySelector('ion-icon');
        heart.addEventListener('click', function () {
            console.log(heart.style.color); // did this to see what color the heart is already
            if (heart.style.color === 'rgb(249, 153, 78)') { //this should be the right orange color
                heart.style.color = 'rgb(255, 255, 255)'; //need to figure out the fill action
            }
            else {
                const favoritesStr = localStorage.getItem('favorites'); //It can have the same name
                let favoritesArray = []; // let doesn't have to be defined, but since we defined it as an array '[]' we don't need an 'else' in the if/else
                if (favoritesStr) {
                    favoritesArray = JSON.parse(favoritesStr); //parse changes it to array
                }
                heart.style.color = 'rgb(249, 153, 78)'; // before push to keep color
                favoritesArray.push(eventDiv.innerHTML);
                const newString = JSON.stringify(favoritesArray); //this line and the two next ones were inside the if/else but to avoid DRY we pulled them. 
                localStorage.setItem("favorites", newString); // 
            }
        });
    });
});
