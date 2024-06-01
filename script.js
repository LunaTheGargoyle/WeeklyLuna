document.addEventListener("DOMContentLoaded", function() {
    console.log("Page is fully loaded");

    var myElement = document.getElementById("myElementId");

    if (myElement) {
        myElement.addEventListener("click", function() {
            console.log("Element clicked");
        });
    } else {
        console.error("Element with ID 'myElementId' not found");
    }
});
