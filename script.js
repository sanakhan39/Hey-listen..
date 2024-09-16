function checkPassword() {
    const passwordInput = document.getElementById('passwordInput').value;
    const correctPassword = '1234'; // Set your desired password here

    if (passwordInput === correctPassword) {
        document.getElementById('passwordPrompt').style.display = 'none';
        document.getElementById('letterContainer').style.display = 'flex';
    } else {
        alert('Incorrect password. Please try again.');
    }
}
