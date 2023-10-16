"use strict";
// I NEED TO CREATE THE LOCAL STORAGE HERE - what do I need for that. 
// when heart is clicked again, the color should go back to previous color 
// and be removed from local storage 
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
            if (heart.style.color === 'rgb(255, 0, 0)') { //if color is red 
                heart.style.color = 'rgb(255, 255, 255)'; // it will change to white
                const favoritesStr = localStorage.getItem('favorites'); // and get favorites from local Storage
                if (favoritesStr) { // if its there
                    let favoritesArray = JSON.parse(favoritesStr); // parse string into an array of objects
                }
            }
        });
        heart.addEventListener('click', function () {
            const favoritesStr = localStorage.getItem('favorites');
            let favoritesArray = favoritesStr ? JSON.parse(favoritesStr) : [];
            if (heart.style.color === 'rgb(255, 0, 0)') { //if color is red 
                heart.style.color = 'rgb(255, 255, 255)'; // it will change to white
                // Add your event to the favorites array here
                favoritesArray.push(eventDiv.innerHTML);
            }
            else { // if color is not red
                heart.style.color = 'rgb(255, 0, 0)'; // it will change to red
                // Find the index of your event in the favorites array
                const index = favoritesArray.indexOf(eventDiv.innerHTML);
                if (index !== -1) {
                    // Remove your event from the favorites array
                    favoritesArray.splice(index, 1);
                }
            }
            // Update the favorites in local storage
            const newString = JSON.stringify(favoritesArray);
            localStorage.setItem("favorites", newString);
        });
    });
});
