const TAMPA = document.querySelector('#tampa');

document.querySelector('#loginButton').addEventListener('click', () => {
    TAMPA.classList.add('outro-lado');
    document.querySelector('#divLogin').classList.remove('off');
    document.querySelector('#divSing').classList.add('off')
});

document.querySelector('#singButton').addEventListener('click', () => {
    TAMPA.classList.remove('outro-lado');
    document.querySelector('#divSing').classList.remove('off');
    document.querySelector('#divLogin').classList.add('off');
})