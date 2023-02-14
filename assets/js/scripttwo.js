const apiKey = "U58GeU3pdAJMCaCewikRQKWgwP8"
const apiUrl = "https://ci-jshint.herokuapp.com/api?api_key=U58GeU3pdAJMCaCewikRQKWgwP8"
const resultsModal = new bootstrap.Modal(document.getElementById("resultsModal"));
document.getElementById("status").addEventListener("click", e => getStatus(e));

async function getStatus(e) {
    const response = await fetch(apiUrl)
    const data = await response.json
    
    document.getElementById("results-content").innerText = data
}