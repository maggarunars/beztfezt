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
// const iconsText = document.querySelectorAll("#color p")
// function fontColorChange(text){
//     for (let i = 0; i < daysText.length; i++){
//             icons[i].style.backgroundColor = "#264653"
//         }
//         text.style.color = "#264653";
// }
// localStorage data doesn't expire. It caches data and can be accessed without an internet connection. More secure than cookies (not for sensitive) and 
// has a larger capacity. It's synchronus so it's good for small amounts of data. 
// localStorage can only store strings. 
//          setItem(): Add key and value to localStorage
//           getItem(): This is how you get items from localStorage
//           removeItem(): Remove an item from localStorage
//           clear(): Clear all data from localStorage
//           key(): Passed a number to retrieve the key of a localStorage
// // this is defining the heart and getting the html element 
// const heart = document.querySelector("heart-outline")
// // this checks to see if anything is in the localStorage array already and loads them, 
// //otherwise it creates an empty array
// let itemsArray = localStorage.getItem('items') ?
// JSON.parse(localStorage.getItem('items')) : [];
// //function for the list on MyEvents page
// itemsArray.array.forEach(heartFill);
// function heartFill(){
//     const li = document.createElement('favoriteList')
// }
//  // this adds data to the storage
// localStorage.setItem("heart-outline");
//  // this is for reading storage
// const heart = localStorage.getItem("heart-fill")
//  //removing local storage
// localStorage.removeItem('heart');
const eventContainer = document.querySelector("#eventContainer");
events.forEach((event) => {
    // const start = new Date(event.start)
    // const startHour = start.getHours()
    // const startMin = start.getMinutes()
    //if cond fyrir auka null  FInna það 
    eventContainer.innerHTML += `
    <div class="mx-4 mb-4 bg-blue rounded-xl flex justify-between h-40 w-{358px}">
            <div class="flex flex-col justify-evenly w-100">
                <div class="px-4">
                    <h2 class="font-bold text-white text-base">${event.yoast_head_json.title}</h2>
                    <h3>${event.acf.stadsetning}</h3>
                </div>
                <div class="flex justify-between px-4 gap-3">
                    <div class="flex items-center">
                        <ion-icon class="text-4xl" name="heart-outline"></ion-icon>
                        <ion-icon class="text-4xl" name="share-outline"></ion-icon>
                    </div>
                    <div>
                        <p class="flex justify-end">${event.acf.dagsetning}</p>
                     
                    </div>
                </div>
            </div>
            <img class="rounded-xl h-40 w-40" src="${event.yoast_head_json.og_image[0].url}" alt="">
            <div>
               
            </div>
        </div>
    `;
});
