
// This is the dropdown and toggle function for the Filter Menu Bar 
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


// this function doesnt work I think
document.addEventListener('DOMContentLoaded', function () {
const iconHeart = document.getElementById('heart');

    if (iconHeart) {
         iconHeart.addEventListener('click', function () {
             // Change the color to red when clicked
            iconHeart.style.backgroundColor = 'red';
         });
     }
 });

// // document.addEventListener('DOMContentLoaded', function () {
// //     const icon = document.getElementById('icon') as HTMLElement;

// //     if (icon) {
// //         icon.addEventListener('click', function () {
// //             // Change the color to red when clicked
// //             icon.style.color = '#F9994E';
// //         });
// //     }
// // });

// this worked below for color change
// // Wait for the DOM content to be fully loaded before executing the script
// document.addEventListener('DOMContentLoaded', function () {
//     // Find the element with the ID 'icon' and treat it as an HTMLElement
//     const icon = document.getElementById('icon') as HTMLElement;

//     // Check if the element with the ID 'icon' exists
//     if (icon) {
//         // Add a click event listener to the 'icon' element
//         icon.addEventListener('click', function () {
//             // Check the current color of the 'icon' element
//             const currentColor = icon.style.color;

//             // If the current color is not red, set it to red
//             if (currentColor !== 'rgb(249, 153, 78)' && currentColor !== '#F9994E') {
//                 // Change the color to orange
//                 icon.style.color = '#F9994E';
//             } else {
//                 // Set the color back to the original color
//                 // Note: Replace 'originalColor' with the actual original color value
//                 icon.style.color = 'originalColor';
//             }
//         });
//     }
// });


// // const heartColor = document.querySelectorAll<HTMLElement>("#heart")
// // function color(heart: HTMLElement)
//         // const iconsText = document.querySelectorAll("#color p")
//         // function fontColorChange(text){
//         //     for (let i = 0; i < daysText.length; i++){
//         //             icons[i].style.backgroundColor = "#264653"
//         //         }
//         //         text.style.color = "#264653";
//         // }


// const eventContainer = document.querySelector("#eventContainer") as HTMLElement;

// events.forEach((event) => {
//     // const start = new Date(event.start)  // const startHour = start.getHours()  // const startMin = start.getMinutes()
//     eventContainer.innerHTML += `
//     <div class="mx-4 mb-4 bg-blue rounded-xl flex justify-between h-40 w-{358px}">
//             <div class="flex flex-col justify-evenly w-100">
//                 <div class="px-4">
//                     <h2 class="font-bold text-white text-base">${event.yoast_head_json.title}</h2>
//                     <h3>${event.acf.stadsetning}</h3>
//                 </div>
//                 <div class="flex justify-between px-4 gap-3">
//                     <div class="flex items-center">
//                         <ion-icon class="text-4xl" name="heart-outline"></ion-icon>
//                         <ion-icon class="text-4xl" name="share-outline"></ion-icon>
//                     </div>
//                     <div>
//                         <p class="flex justify-end">${event.acf.dagsetning}</p>
                     
//                     </div>
//                 </div>
//             </div>
//             <img class="rounded-xl h-40 w-40" src="${event.yoast_head_json.og_image[0].url}" alt="">
//             <div>
               
//             </div>
//         </div>
//     `
// })


 document.addEventListener('DOMContentLoaded', function () {
    const eventContainer = document.querySelector("#eventContainer") as HTMLElement;
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

        const heart = eventDiv.querySelector('ion-icon') as HTMLElement;
        heart.addEventListener('click', function(){
        console.log(heart.style.color)  // did this to see what color the heart is already
                if(heart.style.color === 'rgb(255, 0, 0)'){
                    heart.style.color = 'rgb(255, 255, 255)';
                } 
                else{
                    const favoritesStr = localStorage.getItem('favorites')  //It can have the same name
                    let favoritesArray = []   // let doesn't have to be defined, but since we defined it as an array '[]' we don't need an 'else' in the if/else
                    if(favoritesStr){
                        favoritesArray = JSON.parse(favoritesStr);  //parse changes it to array

                    }
                    favoritesArray.push(eventDiv.innerHTML);
                    const newString = JSON.stringify(favoritesArray); //this line and the two next ones were inside the if/else but to avoid DRY we pulled them. 
                    localStorage.setItem("favorites",newString);   // 
                    heart.style.color = 'rgb(255, 0, 0)'
                }
        })
    });
});
     

//  create a new ts for my events and do the local storage there. 
// comment on everything. 


// //This is adding key and value to localStorage
// const eventDiv = { title: 'event.yoast_head_json.title'};
//  //localStorage.setItem('eventCard', JSON.stringify(eventCard));

// //it needs to check if the heart is filled
// // if heart filled, then add to favorites. 
// // if filled on click then remove from favorites. 
// //and then save the updated list to local storage


// // this will get the event card from localStorage
// //const savedEventCard = JSON.parse(localStorage.getItem('eventCard'));

// // // //removing local storage
// localStorage.removeItem('eventCard');

// // // // this is defining the heart and getting the html element 
// const heart = document.querySelector("#icon")

// // // // this checks to see if anything is in the localStorage array already and loads them, 
// // // //otherwise it creates an empty array
// //let itemsArray = localStorage.getItem('items') ?
// //JSON.parse(localStorage.getItem('items')) : [];

//  //function for the list on MyEvents page
// //itemsArray.array.forEach(heartFill);
// function heartFill(){
//  const li = document.createElement('favoriteList')

// }

//  // this adds data to the storage
// localStorage.setItem("heart-outline");

//  // this is for reading storage
// const heart = localStorage.getItem("heart-fill")

//  //removing local storage
// localStorage.removeItem('heart');
    
        
        // localStorage data doesn't expire. It caches data and can be accessed without an internet connection. More secure than cookies (not for sensitive) and 
        // has a larger capacity. It's synchronus so it's good for small amounts of data. 
        // localStorage can only store strings. 
        //          setItem(): Add key and value to localStorage
        //           getItem(): This is how you get items from localStorage
        //           removeItem(): Remove an item from localStorage
        //           clear(): Clear all data from localStorage
        //           key(): Passed a number to retrieve the key of a localStorage



        
// Add a click event listener to the heart icon
// const heartIcon = eventDiv.querySelector('#icon');
// heartIcon?.addEventListener('click', function () {
//     // Toggle the 'filled' class on click
//     heartIcon.classList.toggle('filled');
                    
        // Get the current list of favorited events from localStorage
   //     let favoritedEvents = JSON.parse(localStorage.getItem('favoritedEvents') ) || [];
                    
        //     if (heartIcon.classList.contains('filled')) {
        //         // If the heart is filled, add the event to favorites
        //      favoritedEvents.push(event);
        //     } else {
        //         // If the heart is not filled, remove the event from favorites
        //     favoritedEvents = favoritedEvents.filter(e => e.yoast_head_json.title !== event.yoast_head_json.title);
        //     }
                    
        // // Save the updated list back to localStorage
        //         localStorage.setItem('favoritedEvents', JSON.stringify(favoritedEvents));
        //     });






        // else{
        //     const favoritesStr = localStorage.getItem('favorites')  //ma heita thad sama
        //     let favoritesArray = []   // doesn't have to be defined 
        //     if(favoritesStr){
        //         favoritesArray = JSON.parse(favoritesStr);  //changes it to array

        //     }
        //     else {
        //         favoritesArray = []
     
        //     }
        //     favoritesArray.push(eventDiv.innerHTML);
        //     const newString = JSON.stringify(favoritesArray); //
        //     localStorage.setItem("favorites",newString);
        //     heart.style.color = 'rgb(255, 0, 0)'
        // }