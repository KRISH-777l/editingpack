if (data.success) {
    window.location.href = 'index.html'; // Redirect to the main page on successful login
} else {
    document.getElementById('message').textContent = data.message;
    document.getElementById('message').style.color = "red";
}
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Send login request to the backend server
    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            window.location.href = 'index.html'; // Redirect to the main page if login is successful
        } else {
            document.getElementById('message').textContent = data.message; // Show error message
        }
    })
    .catch(error => console.error('Error:', error));
});
