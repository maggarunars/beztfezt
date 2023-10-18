
// I NEED TO CREATE THE LOCAL STORAGE HERE - what do I need for that. 
// when heart is clicked again, the color should go back to previous color 
// and be removed from local storage 
document.addEventListener('DOMContentLoaded', function () {
    const eventContainer = document.querySelector("#eventContainer") as HTMLElement;
        // forEach loop

        const favoritesStr = localStorage.getItem('favorites')  //It can have the same name
        let favoritesArray = []   // let doesn't have to be defined, but since we defined it as an array '[]' we don't need an 'else' in the if/else
        if(favoritesStr){
            favoritesArray = JSON.parse(favoritesStr);  //parse changes it to array

        }
        console.log(favoritesArray)
    favoritesArray.forEach((eventStr:string) => {
        // Create a new div for each event
        const eventDiv = document.createElement('div');
        eventDiv.className = "mx-4 mb-4 bg-blue rounded-xl flex justify-between h-40 w-{358px}";
        // Add the event details to the div
        eventDiv.innerHTML = eventStr;
    
        // Add the new div to the event container
        eventContainer.appendChild(eventDiv);

        // defining the heart and fetching the icons that should change. 
        const heart = eventDiv.querySelector('ion-icon') as HTMLElement;
        heart.addEventListener('click', function(){
            if(heart.style.color === 'rgb(249, 153, 78)'){   //if color is orange 
                heart.style.color = 'rgb(255, 255, 255)';  // it will change to white
                const favoritesStr = localStorage.getItem('favorites');  // and get favorites from local Storage
                if(favoritesStr) {  // if its there
                    let favoritesArray = JSON.parse(favoritesStr);  // parse string into an array of objects
                }
            }
    })

    heart.addEventListener('click', function(){
        const favoritesStr = localStorage.getItem('favorites');
        let favoritesArray = favoritesStr ? JSON.parse(favoritesStr) : [];   //condition ? expression_if_true : expression_if_false;

            if(heart.style.color === 'rgb(249, 153, 78)'){   //if color is orange
                heart.style.color = 'rgb(255, 255, 255)';  // it will change to white
                // Add your event to the favorites array here
                favoritesArray.push(eventDiv.innerHTML);
<<<<<<< HEAD
<<<<<<< HEAD
            } else {  // if color is not red
=======
            } else {  // if color is not orange
>>>>>>> a56f6d836622ea7e1129d316806345429118b140
=======
            } else {  // if color is not orange
>>>>>>> 5952c824ddd89bf3eea3e5b95489a57d09684a28
                heart.style.color = 'rgb(249, 153, 78)';  // it will change to orange
                // Find the index of your event in the favorites array
                const index = favoritesArray.indexOf(eventDiv.innerHTML);
                if (index !== -1) {
                    // Remove your event from the favorites array
                    favoritesArray.splice(index, 1);
                    eventContainer.removeChild(eventDiv);
                }
            }

            // Update the favorites in local storage
            const newString = JSON.stringify(favoritesArray);
            localStorage.setItem("favorites", newString);
        })
    });
});