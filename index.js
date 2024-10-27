function addingEventListener() {
    const button = document.getElementById('button');
    button.addEventListener('click', () => {
        const main = document.getElementById('main');
        main.textContent = 'My ID is "main"!';
    });
}
