document.addEventListener("DOMContentLoaded", function {

    const eventContainer = document.querySelector("#eventContainer") as HTMLElement;

    events.forEach((event)) => {

        const eventDiv = document.createElement("div")

        eventDiv.className = "mx-4 mb-4 bg-blue rounded-xl flex"

        eventDiv.innerHTML = `
        <div class="flex w-full justify-between">   
            <div class="flex flex-col justify-evenly w-full">
                <div class="px-4">
                    <a href="eventPage.html">
                        <h2 class="font-lexend font-bold text-white text-lg">${event.yoast_head_json.title}</h2>
                        <div class="flex items-center">

                            <h3 class="text-white text-base font-light">${event.acf.stadsetning}</h3>
                        </div>
                    </a> 
                </div>
                <div class="flex justify-between px-4 gap-2">
                    <div class="flex items-center gap-3"> 
                        <ion-icon class="text-4xl heart-icon" name="heart-outline"></ion-icon>
                        <img src="images/shareicon.svg" alt="share icon">
                    </div>
                    <div class="flex items-center">
                        <h3 class="text-white font-medium">${event.acf.dagsetning}</h3>
                    </div>
                </div>
            </div>
            <div class="h-40 w-40 object-fill">        
                <img class="h-40 w-50 rounded-xl" src="${event.yoast_head_json.og_image[0].url}" alt=""> 
            </div>
        </div>
        `;
        eventContainer.appendChild(eventDiv)
    }
})