// Handles sliders and value interactions

let incomeSlider = document.getElementById("incomeFilter");
let incomeValue = document.getElementById("incomeValue");
let vacanthomesSlider = document.getElementById("vacanthomesFilter");
let vacanthomesValue = document.getElementById("vacanthomesValue");
let remoteSlider = document.getElementById("remoteFilter");
let remoteValue = document.getElementById("remoteValue");
let travelSlider = document.getElementById("travelFilter");
let travelValue = document.getElementById("travelValue");
let unenmploymentSlider = document.getElementById("unemploymentFilter");
let unenmploymentValue = document.getElementById("unemploymentValue");

incomeSlider.addEventListener("input", () => {
  incomeValue.textContent = parseInt(incomeSlider.value).toLocaleString();
});

vacanthomesSlider.addEventListener("input", () => {
  vacanthomesValue.textContent = vacanthomesSlider.value;
});

unenmploymentSlider.addEventListener("input", () => {
  unenmploymentValue.textContent = unenmploymentSlider.value;
});

remoteSlider.addEventListener("input", () => {
  remoteValue.textContent = remoteSlider.value;
});

travelSlider.addEventListener("input", () => {
  travelValue.textContent = travelSlider.value;
});

document.getElementById("applyFilters").addEventListener("click", function () {
  document.getElementById("filterForm").submit();
});

// Share Button Interactions - Adjusting CSS and saving link to clipboard
document.getElementById("share-btn").addEventListener("click", () => {
  const button = document.getElementById("share-btn");

  // Copy the current page URL to the clipboard
  navigator.clipboard
    .writeText(window.location.href)
    .then(() => {
      // Add "copied" class for success feedback
      button.classList.add("copied");
      button.textContent = "Link Copied!";

      // Reset the button after a delay
      setTimeout(() => {
        button.classList.remove("copied");
        button.textContent = "Share";
      }, 350); // Reset after 1 second
    })
    .catch((err) => {
      console.error("Failed to copy link:", err);
    });
});

// Export Button
