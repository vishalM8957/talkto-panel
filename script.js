let navbar = document.querySelector("#navbar");
let open_icon = document.querySelector("#navbar-open-icon");
let close_icon = document.querySelector("#navbar-close-icon");

function openSidebar() {
    navbar.style.height = "300px";
    open_icon.style.display = "none";
    close_icon.style.display = "block";
}

function closeSidebar() {
    navbar.style.height = "20px";
    open_icon.style.display = "block";
    close_icon.style.display = "none";
}


// function goToSection(event, sectionId, urlName) {
//     event.preventDefault();

//     // URL me custom name show karega
//     history.pushState(null, null, urlName);

//     // Actual scroll hoga original id par
//     document.getElementById(sectionId).scrollIntoView({
//         behavior: "smooth"
//     });
// }
