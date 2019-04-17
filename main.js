window.onload = init;

function init() {
    document.querySelector('.toggle-button')
        .addEventListener('click', toggleTheme);
}

function toggleTheme(event) {
    event.preventDefault();

    const half = document.querySelector('.half');
    const bottomHalf = document.querySelector('.bottom-half');
    const button = event.target;

    half.classList.toggle('bottom-half');
    bottomHalf.classList.toggle('half');
   

    // button.innerText = button.innerText === 'SWITCH COLOR'
    //     ? `SWITCH TO START`
    //     : `SWITCH COLOR`;

    half.classList.replace('half', 'bottom-half');
    bottomHalf.classList.replace('bottom-half', 'half');


    
}