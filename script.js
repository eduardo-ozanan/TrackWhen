console.log('JavaScript is working!');

document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.cta-button');
    if (button) {
        button.addEventListener('click', () => {
            alert('Button clicked! JavaScript is working!');
        });
    }
});
