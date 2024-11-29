const incomeSlider = document.getElementById('incomeFilter');
const incomeValue = document.getElementById('incomeValue');
const vacanthomesSlider = document.getElementById('vacanthomesFilter');
const vacanthomesValue = document.getElementById('vacanthomesValue');
const remoteSlider = document.getElementById('remoteFilter');
const remoteValue = document.getElementById('remoteValue');
const travelSlider = document.getElementById('travelFilter');
const travelValue = document.getElementById('travelValue');
const unenmploymentSlider = document.getElementById('unemploymentFilter');
const unenmploymentValue = document.getElementById('unemploymentValue');

incomeSlider.addEventListener('input', () => {
  incomeValue.textContent = parseInt(incomeSlider.value).toLocaleString();
});

vacanthomesSlider.addEventListener('input', () => {
  vacanthomesValue.textContent = vacanthomesSlider.value;
});

unenmploymentSlider.addEventListener('input', () => {
  unenmploymentValue.textContent = unenmploymentSlider.value;
});

remoteSlider.addEventListener('input', () => {
  remoteValue.textContent = remoteSlider.value;
});

travelSlider.addEventListener('input', () => {
  travelValue.textContent = travelSlider.value;
});