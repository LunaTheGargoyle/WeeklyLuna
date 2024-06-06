document.addEventListener("DOMContentLoaded", function() {
    console.log("Page is fully loaded");

    // Example of getting an element by its ID and adding an event listener
    var myElement = document.getElementById("myElementId");

    if (myElement) {
        myElement.addEventListener("click", function() {
            console.log("Element clicked");
        });
    } else {
        console.error("Element with ID 'myElementId' not found");
    }
});
