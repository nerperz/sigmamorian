const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup')
const iconClose = document.querySelector('.icon-close')

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active')
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active')
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup')
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup')
});

// assignmentsonly



//LOGIN //note - not sure if working or needed
//deleted --overrunscript
//REGISTER-FORM //note - not sure if working or needed 
//deleted --overrunscript
//remember node.js
//npm init -y
//npm install express mongoose bcryptjs jsonwebtoken body-parser
//transfer to node.js
