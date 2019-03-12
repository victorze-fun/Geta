const btnUpper = document.getElementById('upper');
const btnLower = document.getElementById('lower');
const copy = document.getElementById('copy');

btnUpper.addEventListener('click', () => {
    const textarea = document.querySelector('textarea')
    let text = textarea.value;
    textarea.value = text.toUpperCase();
});

btnLower.addEventListener('click', () => {
    const textarea = document.querySelector('textarea')
    let text = textarea.value;
    textarea.value = text.toLowerCase();
});

copy.addEventListener('click', () => {
    const textarea = document.querySelector('textarea')
    textarea.select();
    document.execCommand('copy');
});
