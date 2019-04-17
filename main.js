window.onload = init;

function init() {
    document.querySelector('.toggle-button')
        .addEventListener('click', toggleTheme);
}

function toggleTheme(event) {
    event.preventDefault();

    const app = document.querySelector('#app');
    const half = document.querySelector('.half');
    const bottomHalf = document.querySelector('.bottom-half');

   

    app.classList.toggle('app');
    half.classList.toggle('bottom-half');
    bottomHalf.classList.toggle('half');
    

    const button = document.querySelector('.toggle-button');
    
   

    button.innerText = button.innerText === 'SWITCH BACKGROUND'
        ? `SWITCH TO START`
        : `SWITCH BACKGROUND`;

    app.classList.replace('app', 'alt-app');
    half.classList.replace('half', 'bottom-half');
    bottomHalf.classList.replace('bottom-half', 'half');
    
    

    // Query table 1 and table 2.
    const res1 = document.querySelector('#res');
    const prj1 = document.querySelector('#prj');

    const res2 = document.querySelector('#res2');
    const prj2 = document.querySelector('#prj2');

    const res3 = document.querySelector('#res3');
    const prj3 = document.querySelector('#prj3');
    
    // // Add table 1 as a child to projects
    res1.innerText = res1.innerText === '🧥'
    ? `🙏🏼`
    : `🧥`;
    
    res2.innerText = res2.innerText === '👖'
    ? `👍🏼`
    : `👖`;

    res3.innerText = res3.innerText === '👞'
    ? `👎🏼`
    : `👞`;
    
    // Add table 2 as a child to resume.

    prj1.innerText = prj1.innerText === '🙏🏼'
    ? `🧥`
    : `🙏🏼`;

    prj2.innerText = prj2.innerText === '👍🏼'
    ? `👖`
    : `👍🏼`;

    prj3.innerText = prj3.innerText === '👎🏼'
    ? `👞`
    : `👎🏼`;
}