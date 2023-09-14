const ham = document.querySelector('.ham');
const ul = document.querySelector('ul');

ham.addEventListener('click', () => {
    ul.classList.toggle('bar-active');

    let ham_child = ham.firstElementChild;
    if (ul.classList.contains('bar-active')) {
        ham_child.classList.replace('fa-bars', 'fa-xmark');
    } else {
        ham_child.classList.replace('fa-xmark', 'fa-bars');

    }
});