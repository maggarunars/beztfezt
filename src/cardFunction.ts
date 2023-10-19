
// THIS CREATES THE EVENT LIST ON EVENTS.HTML
// when HTML document is fully loaded this code will run
document.addEventListener('DOMContentLoaded', function () {
    const eventContainer = document.querySelector("#eventContainer") as HTMLElement; // finds the html element id=eventContainer and assigns it the variable "eventContainer"
        // forEach loop. Events is our array. .forEach() is a method that executes the provided function once for each array element.
        // event is an individual event from our events array. 
        //In the {} is a block of code that processes the event. 
    events.forEach((event) => {
                // Create a new div for each event and assigns it to the variable "eventDiv"
        const eventDiv = document.createElement('div');

        eventDiv.className = "mx-4 mb-4 bg-blue rounded-xl flex"; // the name of the div


        // Add the event details to the div. THe ${} will get info from events array and fill into the html 
        // `${}` this is used in template strings to embed expressions.  The HTML below is a template string. It is surrounded by bakticks: ``
        eventDiv.innerHTML = `
        <div class="flex w-full justify-between">   
            <div class="flex flex-col justify-evenly w-full">
                <div class="px-4">
                    <a href="eventPage.html">
                        <h2 class="font-bold text-white text-base">${event.yoast_head_json.title}</h2>
                        <h3>${event.acf.stadsetning}</h3>
                    </a> 
                </div>
                <div class="flex justify-between px-4 gap-3">
                    <div class="flex items-center"> 
                        <ion-icon class="text-4xl heart-icon" name="heart-outline"></ion-icon>
                        <img src="images/shareicon.svg" alt="share icon">
                    </div>
                    <div>
                        <p class="flex justify-end">${event.acf.dagsetning}</p>
                    </div>
                </div>
            </div>
            <div class="h-40 w-40 object-fill">        
                <img class="h-40 w-50 rounded-xl" src="${event.yoast_head_json.og_image[0].url}" alt=""> 
            </div>
        </div>
        `;
        // Add the new div to the event container
        eventContainer.appendChild(eventDiv);

        // Here we change the color of the heart icon when clicked and stores the event in the local storage if it is favorited. 
        // The queryselector choosed the first ion-icon element within evenDiv and assigns it to the variable 'heart'
        const heart = eventDiv.querySelector('ion-icon') as HTMLElement;

        // Check local storage for heart state - defining constant as heartstate
        // The key used to store the state is a combination of `heart-` and the title of event.  
        const heartState = localStorage.getItem(`heart-${event.yoast_head_json.title}`);
        if (heartState === 'orange') {   // checks to see if the heart is orange, if it is then the user has clicked this before. If this is true then
            heart.style.color = 'rgb(249, 153, 78)';  // this sets the line to orange. If a user marked event as favorite, it remains marked even when they leave the page
        }

        heart.addEventListener('click', function(){    // This line adds an event listener to 'heart' that triggers when it's clicked
                
        // This line retrieves the item with key 'favorites' from local storage and assigns it to 'favoritesStr'
        const favoritesStr = localStorage.getItem('favorites')  // It can have the same name
        let favoritesArray = []   // This line initializes an empty array that will hold the details of favorited events.   let doesn't have to be defined, but since we defined it as an array '[]' we don't need an 'else' in the if/else
        if(favoritesStr){    // This block checks if 'favoritesStr' exists in localStorage
            favoritesArray = JSON.parse(favoritesStr);  // If it does, it parses 'favoritesStr' into an array and assigns it to 'favoritesArray'

        }
    
        if(heart.style.color === 'rgb(249, 153, 78)'){   // if the color is orange and the user has already favorited it         
                localStorage.setItem(`heart-${event.yoast_head_json.title}`, 'white'); //This line updates the state of the heart icon in the local storage to ‘white’, indicating that the event is no longer a favorite.
                // this finds the index of the current event in the favorites array
                const index = favoritesArray.indexOf(eventDiv.innerHTML);
                if (index !== -1) {  // this checks to see if the event is there already. -1 means it is not there. 
                    // If index is there (1) it will remove your event from the favorites array
                    favoritesArray.splice(index, 1);
                

                    // This updates the favorites list in local storage after converting it back to a string format.
                    const newString = JSON.stringify(favoritesArray);
                    localStorage.setItem("favorites", newString);
                }
                heart.style.color = 'rgb(255, 255, 255)';  //  Here it changes the color of the heart icon on the page to white, visually indicating that it’s no longer a favorite.
            } 
            else{   // if the current color of the icon is not orange it will execute the following block of code

                heart.style.color = 'rgb(249, 153, 78)'  // Changes color of heart to orange. Line added before push to keep color change. It was below setItem before and then the color wasn't stored. 
                localStorage.setItem(`heart-${event.yoast_head_json.title}`, 'orange'); //This line updates the state of the heart icon in local storage to ‘orange’, indicating that the event is now marked as a favorite.
                favoritesArray.push(eventDiv.innerHTML);   // This line adds the details of the newly favorited event to favoritesArray.
                const newString = JSON.stringify(favoritesArray); // This line converts 'favoritesArray' into a string so it can be stored in localStorage and assigns it to 'newString'
                localStorage.setItem("favorites",newString);   // This line stores the updated list 'newString' in local storage with the key "favorites"
            }
        })  
    });
});
     

