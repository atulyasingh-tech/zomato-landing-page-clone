// Placeholder animation

const search = document.querySelector("input");

const placeholders = [
    "Search for Biryani...",
    "Search for Pizza...",
    "Search for Burger...",
    "Search for Momos...",
    "Search for Dosa...",
    "Search for Chinese..."
];

let i = 0;

setInterval(() => {
    search.placeholder = placeholders[i];
    i = (i + 1) % placeholders.length;
}, 2000);


// Welcome message

window.onload = () => {
    console.log("Welcome to Food Delivery");
};


// Enter key

search.addEventListener("keypress", function(e){

    if(e.key==="Enter"){

        if(search.value.trim()==""){
            alert("Please enter your location.");
        }
        else{
            alert("Searching restaurants near " + search.value);
        }

    }

});

window.addEventListener("scroll", function () {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});