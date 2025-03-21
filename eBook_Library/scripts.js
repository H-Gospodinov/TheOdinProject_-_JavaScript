
const modalBox = document.querySelector('.modal');

document.querySelector('#add_button').addEventListener('click', () => {
    modalBox.classList.add('active');
});
document.querySelector('#close_button').addEventListener('click', () => {
    modalBox.classList.remove('active');
});