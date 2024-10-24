function copy_link() {
    
    const link = window.location.href;
    const tempInput = document.createElement('input');
    document.body.appendChild(tempInput);
    tempInput.value = link;
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    
    alert('Link copied to clipboard: ' + link);
}

function copy_route_name() {
    const routeNameInput = document.getElementById('route_name_input');
    
    if (routeNameInput.value.trim() !== "") {
        routeNameInput.select();
        document.execCommand('copy');
        
        alert('Route name copied to clipboard: ' + routeNameInput.value);
    } else {
        alert('Please enter a route name before copying.');
    }
}
