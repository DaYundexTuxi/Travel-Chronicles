function copy_route_name() {
    var copytext = document.getElementById("route_name_input");

    copytext.select();
    copytext.setSelectionRange(0, 9999);

    navigator.clipboard.writeText(copytext.value);
}

function copy_link() {
    navigator.clipboard.writeText("localhost:3000/Home.html");
    
}