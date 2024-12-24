// script.js
document.getElementById('searchBtn').addEventListener('click', function() {
    const query = document.getElementById('search').value;
    searchMovies(query);
});

document.getElementById('uploadBtn').addEventListener('click', function() {
    const fileInput = document.getElementById('upload');
    const file = fileInput.files[0];
    uploadMovie(file);
});

function searchMovies(query) {
    // Example: Fetch movies from Goojara and YouTube
    // This is a placeholder for actual API calls
    console.log(`Searching for movies related to: ${query}`);
}

function uploadMovie(file) {
    // Example: Handle movie upload
    console.log(`Uploading movie: ${file.name}`);
}