document.addEventListener('DOMContentLoaded', function () {
    const eventContainer = document.querySelector("#eventContainer") as HTMLElement; // finds the html element id=eventContainer and assigns it the variable "eventContainer"
        // forEach loop
                // Create a new div for each event and assigns it to the variable "eventDiv"
        const eventDiv = document.createElement('div');
        eventDiv.className = ""; // the name of the div
        events.forEach((event) => {
        
        // Add the event details to the div. THe ${} will get info from events array and fill into the html 
        eventDiv.innerHTML = `
        <div class="flex items-center mb-20">
            <div class="bg-blue rounded-2xl mx-4 p-4">
                <div class="flex justify-between items-center">
                    <h1 class="text-white font-bold text-3xl pb-1">${event.yoast_head_json.title}</h1>
                    <div class="flex justify-around">
                        <ion-icon class="text-4xl text-white px-2" name="heart-outline"></ion-icon>
                        <img src="images/shareicon.svg" alt="share icon">
                    </div>
                </div>
                <div class="flex flex-col justify-evenly">
                    <div class="pb-4">
                        <h2 class="text-white text-lg font-bold">${event.acf.stadsetning}</h2>
                        <h2 class="text-white text-lg font-bold">${event.acf.dagsetning} ${event.acf.timasetning} : ${event.acf.timasetning_til}</h2>
                    </div>
                    <div class="text-center"> 
                        <p class="text-white text-left text-base">
                        ${event.yoast_head_json.og_description}
                        </p>
                    </div>
                </div>
            </div>            
        </div>
        `;
        // Add the new div to the event container
        eventContainer.appendChild(eventDiv);
    });
});
