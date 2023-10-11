function toggleDropdown(){
    let dropdown: Element | null = document.querySelector("#dropdownButton #dropdown") as Element
    dropdown.classList.toggle("hidden")
}
