
// This is the dropdown and toggle function for the Filter Menu Bar 
function toggleDropdown(){
    let dropdown: Element | null = document.querySelector("#dropdownButton #dropdown") as Element
    dropdown.classList.toggle("hidden")
}
