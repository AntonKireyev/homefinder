let lat = 37.7749
let long = -122.4194
let zoom = 5

// assisted by chatGPT

// // add markers to the map (can use this to display locations!)
// L.marker([lat, long]).addTo(map)
//     .bindPopup('This is a city')
//     .openPopup();

// initialize state data
// L.geoJson(statesData).addTo(map);

// reset the map view
document.getElementById('map-reset').addEventListener('click', function() {
    map.setView([lat, long], zoom);
});


 // Initialize the map
 let map = L.map('map').setView([lat, long], zoom);


 // OpenStreetMap, openstreetmap.org/copyright
 let tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

 // Function to add markers based on data
 function addMarkers(data) {
   // Remove any existing markers
   if (window.markers) {
     window.markers.forEach(marker => map.removeLayer(marker));
   }
   window.markers = [];

   // Add new markers
   data.forEach(location => {
     if (location.latitude && location.longitude) {
       const marker = L.marker([location.latitude, location.longitude]).addTo(map);
       marker.bindPopup(`
         <b>${location.msa}</b><br>
         Population: ${location.Population}<br>
         Median Income: $${location.Household_Income.toLocaleString()}<br>
         Vacant Homes: ${location.Vacant_Homes_Percent}%
       `);
       window.markers.push(marker);
     }
   });
 }

 // Initial marker setup
 document.addEventListener('DOMContentLoaded', () => {
   const initialData = {{ data|tojson }};
   addMarkers(initialData);
 });

 // Update map markers dynamically when filters are applied
 document.getElementById('filterForm').addEventListener('submit', event => {
   event.preventDefault(); // Prevent default form submission
   const formData = new FormData(event.target);
   const queryString = new URLSearchParams(formData).toString();

   fetch(`/homefinder?${queryString}`)
     .then(response => response.json())
     .then(filteredData => {
       addMarkers(filteredData);
     })
     .catch(error => console.error('Error fetching data:', error));
 });