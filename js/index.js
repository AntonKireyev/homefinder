const incomeSlider = document.getElementById('incomeFilter');
const incomeValue = document.getElementById('incomeValue');
const populationSlider = document.getElementById('populationFilter');
const populationValue = document.getElementById('populationValue');

incomeSlider.addEventListener('input', () => {
  incomeValue.textContent = parseInt(incomeSlider.value).toLocaleString();
});

populationSlider.addEventListener('input', () => {
  populationValue.textContent = populationSlider.value;
});