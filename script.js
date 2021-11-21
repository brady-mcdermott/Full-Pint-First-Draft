function enlargeGIF(id) {
    var overlay = document.getElementById("overlay");
    var close = document.getElementById("closeoverlay");
    var popup = document.getElementById("beerpopup");
    var image = document.getElementById("beerpopupimage");
        overlay.className = "show";
        close.style.visibility = "visible";
        popup.style.display = "block";
        image.style.height = "700px";
        image.style.width = "321px";
        image.src = "Images/"+id+".gif";
}

function closeoverlay() {
    var overlay = document.getElementById("overlay");
    var close = document.getElementById("closeoverlay");
    var popup = document.getElementById("beerpopup");
    overlay.className = "";
    close.style.visibility = "hidden";
    popup.style.display = "none";
}