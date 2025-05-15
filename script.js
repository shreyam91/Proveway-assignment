const totalDisplay = document.getElementById('total');

const sizes = ["S", "M", "L"];
const colors = ["Black", "White", "Red", "Yellow"];


radios.forEach(radio => {
  radio.addEventListener('change', () => {
    const price = radio.dataset.price;
    totalDisplay.textContent = `Total: $${parseFloat(price).toFixed(2)} USD`;
  });
});


