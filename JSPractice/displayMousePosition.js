var isMouseTracking = false;

// We need a function to update the position
// On our front end, we have 2 labels - 
// one for X, one for Y
function updateMousePosition() {
    // If tracking is enabled, update the labels
    if (isMouseTracking) {
        // We can get the mouse positions with
        //event.clientx and event.clienty.
        // We can update the text of an html element with the 
        // innertext property
        var positionX = doucment.getElementById("mousePositionX");
        positionX.innerText = event.clentX;
        var positionY = document.getElementById("mousePositionY");
        positionY.innerText = event.clientY;
    }
}

// We need a function to toggle whether tacking is enabled
function toggleTracking() {
    // If isMouseTracking is true, set it to false
    //Otherwise it is false, and needs to be set to true
    isMouseTracking = !isMouseTracking;
    // Update the tracking status to show whether it is enabled
    if (isMouseTracking) {
        document.getElementById("trackingStatus")
        .innerText = "Tracking";

    } else {
        document.getElementById("trackingStatus")
        .innerText = "Not Tracking";
    }
}