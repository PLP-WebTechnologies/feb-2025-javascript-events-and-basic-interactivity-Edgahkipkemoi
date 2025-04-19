document.addEventListener("DOMContentLoaded" , () => {
const form = document.getElementById("signUpForm");
const username = document.getElementById("username");
const email = document.getElementById("email");
const message = document.getElementById("message");


//form submit event 
form.addEventListener('submit', function(e) {
    e.preventDefault();

message.textContent = '';
message.className = 'message';


// Simple validation
if (username.value.trim () === '' || email.value.trim () === '') {
    message.textContent = 'Please fill in all fields.';
    message.classList.add('error');
    return;
}

if(!email.value.includes('@')) {
    message.textContent = 'Please enter a valid email.';
    message.classList.add('error');
    return;
}

message.textContent = `Welcome, ${username.value.trim()}! `;
message.classList.add('success');

form.reset();
});
});
