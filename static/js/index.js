let incomeSlider = document.getElementById('incomeFilter');
let incomeValue = document.getElementById('incomeValue');
let vacanthomesSlider = document.getElementById('vacanthomesFilter');
let vacanthomesValue = document.getElementById('vacanthomesValue');
let remoteSlider = document.getElementById('remoteFilter');
let remoteValue = document.getElementById('remoteValue');
let travelSlider = document.getElementById('travelFilter');
let travelValue = document.getElementById('travelValue');
let unenmploymentSlider = document.getElementById('unemploymentFilter');
let unenmploymentValue = document.getElementById('unemploymentValue');

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

document.getElementById('applyFilters').addEventListener('click', function() {
  document.getElementById('filterForm').submit();
});