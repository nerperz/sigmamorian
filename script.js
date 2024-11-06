const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const loginForm = document.querySelector('.form-box.login form'); // Select the login form
const registerForm = document.querySelector('.form-box.register form'); // Select the register form

// Event listeners for toggling between login/register forms
registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});

// Check localStorage for existing users
const users = JSON.parse(localStorage.getItem('users')) || [];

// LOGIN FORM
loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    const email = loginForm.querySelector('input[type="email"]').value;
    const password = loginForm.querySelector('input[type="password"]').value;

    // Simulate checking credentials against localStorage users
    const user = users.find(user => user.email === email && user.password === password);
    
    if (user) {
        // Redirect to loginforum copy.html after successful login
        alert('Login successful!');
        window.location.href = 'loginforum copy.html';
    } else {
        alert('Invalid email or password. Please try again.');
    }
});

// REGISTER FORM
registerForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    const username = registerForm.querySelector('input[type="text"]').value;
    const email = registerForm.querySelector('input[type="email"]').value;
    const password = registerForm.querySelector('input[type="password"]').value;

    // Check if user already exists
    const existingUser = users.find(user => user.email === email);

    if (existingUser) {
        alert('User with this email already exists. Please log in.');
    } else {
        // Save new user to localStorage
        const newUser = { username, email, password };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));

        alert('Registration successful! You can now log in.');
        wrapper.classList.remove('active'); // Switch to login form after registration
    }
});
