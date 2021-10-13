/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */
// document.onscroll = activeToggler;

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 * 
 */
const sections = document.querySelectorAll("section");
let sectionsNumber = sections.length;
const menu = document.getElementById("navbar__list");
let sectionId;
/**
 * End Global Variables
 * Start Helper Functions
 * 
 */


/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav
function buildNav() {
    for (section of sections) {
        sectionName = section.getAttribute('data-nav');
        sectionId = section.getAttribute('id');
        menuItem = document.createElement('li');
        menuLink = document.createElement('a');
        menuLink.setAttribute("class", "menu__link");
        // When navlink clicked scroll to corresponding section
        menuLink.setAttribute("href", "#" + sectionId);
        menuLink.textContent = sectionName;
        menuItem.appendChild(menuLink);
        menu.appendChild(menuItem);

    }
}



// Add class 'active' to section when near top of viewport

//test if section in view point
function sectionInView(section) {
    let position = section.getBoundingClientRect();
    return (position.top >= 0);
}

// shift  add your-active-class if the class in view point
// and remove it if it is not in view point
function activeToggler() {
    for (section of sections) {
        if (sectionInView(section)) {
            if (!section.classList.contains("your-active-class")) {
                section.classList.add("your-active-class");
            } else {
                section.classList.remove("your-active-class");
            }
        }
    }
}















/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 
// Scroll to section on link click

buildNav();



// Set sections as active
document.addEventListener('scroll', activeToggler);