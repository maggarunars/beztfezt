
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
