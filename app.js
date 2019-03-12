const btnUpper = document.getElementById('upper');
const copy = document.getElementById('copy');

btnUpper.addEventListener('click', () => {
    const textarea = document.querySelector('textarea')
    let text = textarea.value;
    textarea.value = text.toUpperCase();
});

copy.addEventListener('click', () => {
    const textarea = document.querySelector('textarea')
    textarea.select();
    document.execCommand('copy');
});
