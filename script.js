// Function to load random pictures
function loadRandomPictures() {
    const imageContainer = document.getElementById("image-container");

    // Replace 'YOUR_API_KEY' with your actual Unsplash API key.
    const apiKey = '46AYMPyg4XqL3tT03GgcNHHeATChfVXMFKrGsX3cZOs';
    
    fetch(`https://api.unsplash.com/photos/random?count=30&client_id=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            imageContainer.innerHTML = "";
            data.forEach(photo => {
                const imgElement = document.createElement("img");
                imgElement.src = photo.urls.regular;
                imgElement.alt = photo.alt_description;
                imgElement.addEventListener("click", () => window.open(photo.links.download));
                imageContainer.appendChild(imgElement);
            });
        })
        .catch(error => {
            console.error(error);
        });
}

// Call the function to load random pictures when the page loads
loadRandomPictures();

// Search form submission
document.getElementById("search-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const searchTerm = document.getElementById("search-term").value;
    const imageContainer = document.getElementById("image-container");

    if (searchTerm) {
        imageContainer.innerHTML = ""; // Clear existing images

        // Replace 'YOUR_API_KEY' with your actual Unsplash API key.
        const apiKey = '46AYMPyg4XqL3tT03GgcNHHeATChfVXMFKrGsX3cZOs';
        
        fetch(`https://api.unsplash.com/search/photos?query=${searchTerm}&client_id=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                data.results.forEach(photo => {
                    const imgElement = document.createElement("img");
                    imgElement.src = photo.urls.regular;
                    imgElement.alt = photo.alt_description;
                    imgElement.addEventListener("click", () => window.open(photo.links.download));
                    imageContainer.appendChild(imgElement);
                });
            })
            .catch(error => {
                console.error(error);
            });
    }
});