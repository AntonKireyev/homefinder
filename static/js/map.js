let lat = 39.8;
let long = -98.5;
let zoom = 5;

// reset the map view
document.getElementById("map-reset").addEventListener("click", function () {
  map.setView([lat, long], zoom);
});

// Initialize the map
let map = L.map("map").setView([lat, long], zoom);

// OpenStreetMap, openstreetmap.org/copyright
let tiles = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);


// Fetch the data from FastAPI
fetch("/homefinder/data")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((item) => {
      const { msa, latitude, longitude, Population, Vacant_Homes_Percent } =
        item;
      const marker = L.marker([latitude, longitude]).addTo(map);
      marker.bindPopup(`
                        <strong>${msa}</strong><br>
                        Population: ${Population.toLocaleString()}<br>
                        Vacant Homes: ${Vacant_Homes_Percent.toFixed(2)}%
                    `);
    });
  })
  .catch((error) => console.error("Error:", error));
