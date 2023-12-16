function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

    const input = document.querySelector('input');
    const createButton = document.querySelector('[data-create]');
    const destroyButton = document.querySelector('[data-destroy]');
    const boxesContainer = document.querySelector('#boxes');

    createButton.addEventListener('click', () => createBoxes(input.value));
    destroyButton.addEventListener('click', destroyBoxes);

    function createBoxes(amount) {
      const parsedAmount = parseInt(amount);

      if (isNaN(parsedAmount) || parsedAmount < 1 || parsedAmount > 100) {
        alert('Please enter a number between 1 and 100.');
        return;
      }

      const boxes = [];

      for (let i = 0; i < parsedAmount; i += 1) {
        const box = document.createElement('div');
        const size = 30 + i * 10;
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.backgroundColor = getRandomHexColor();
        boxes.push(box);
      }

      boxesContainer.append(...boxes);
      input.value = '';
    }

    function destroyBoxes() {
      boxesContainer.innerHTML = '';
    }