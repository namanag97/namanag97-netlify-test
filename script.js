let count = 0;
const button = document.getElementById('clickButton');
const display = document.getElementById('clickCount');

button.addEventListener('click', function() {
    count++;
    display.textContent = `Button clicks: ${count}`;
});
