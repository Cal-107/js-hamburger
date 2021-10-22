// Hamburger Menu

// Ref
const btnHamMenu = document.querySelector('.fa-bars');
const bntCloHamMenu = document.querySelector('.close');
const hamMenu = document.querySelector('.hamburger-menu');

// apertura hamburger menu

btnHamMenu.addEventListener('click', function() {
    hamMenu.classList.add('active');
})

// chiusura hamburger menu

bntCloHamMenu.addEventListener('click', function() {
    hamMenu.classList.remove('active');
})
