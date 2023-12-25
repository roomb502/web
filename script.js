function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // For simplicity, hardcode user credentials
    var users = [
        { username: 'har', password: '23' },
        { username: 'kar', password: '12' },
        { username: 'DebuggerメNaN', password: 'Karan251105' },
        { username: 'adityajha', password: 'aditya24' },
        { username: 'h_patel129', password: '0000' },
    ];

    // Check if the entered credentials match any user
    var isAuthenticated = users.some(user => user.username === username && user.password === password);

    if (isAuthenticated) {
        // Redirect to welcome.html upon successful login
        window.location.href = 'welcome.html';
    } else {
        document.getElementById('error-message').innerText = 'Invalid username or password';
    }
}
function signup(){
    window.location.href = 'https://forms.gle/HgXVmXe97vUDWhSn8';
}
