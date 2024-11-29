const incomeSlider = document.getElementById('incomeFilter');
const incomeValue = document.getElementById('incomeValue');
const vacanthomesSlider = document.getElementById('vacanthomesFilter');
const vacanthomesValue = document.getElementById('vacanthomesValue');

incomeSlider.addEventListener('input', () => {
  incomeValue.textContent = parseInt(incomeSlider.value).toLocaleString();
});

vacanthomesSlider.addEventListener('input', () => {
  vacanthomesValue.textContent = vacanthomesSlider.value;
});