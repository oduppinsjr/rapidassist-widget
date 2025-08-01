window.onload = function() {
    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    //var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    //span.onclick = function() {
    //    modal.style.display = "none";
    //}

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

// Listen for message from iFrame
window.addEventListener('message', function(message) {
    if (message.origin !== "https://roadrunner-dot-regal-sled-246521.uc.r.appspot.com")
        return;
    else if (message.data.modal) {
        document.getElementsByClassName('modal')[0].style.display = message.data.modal;
        //console.log("modal:" + message.data.modal);
    }
});