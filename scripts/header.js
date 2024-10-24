document.addEventListener("DOMContentLoaded", function() {
    fetch("../parts/header.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Header file not found")
            }
            return response.text()
        })
        .then(data => {
            document.querySelector("header").innerHTML = data;
        })
        .catch(error => {
            console.error("Header not loaded", error);
        })
});