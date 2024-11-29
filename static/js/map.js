let lat = 40
let long = -98
let zoom = 6

let map = L.map('map').setView([lat, long], zoom);

// OpenStreetMap, openstreetmap.org/copyright
let tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// add markers to the map (can use this to display locations!)
L.marker([lat, long]).addTo(map)
    .bindPopup('This is a city')
    .openPopup();

// initialize state data
// L.geoJson(statesData).addTo(map);

// reset the map view
document.getElementById('map-reset').addEventListener('click', function() {
    map.setView([lat, long], zoom);
});

// Share Feature by Chatgpt
// document.getElementById('share-btn').addEventListener('click', function() {
//     const center = map.getCenter();
//     const zoom = map.getZoom();
//     const filters = {
//         population: document.getElementById('populationFilter').value,
//         education: document.getElementById('educationFilter').value,
//     };
//     const queryParams = new URLSearchParams({
//         lat: center.lat,
//         lng: center.lng,
//         zoom: zoom,
//         ...filters,
//     }).toString();

//     const shareableUrl = `${window.location.origin}?${queryParams}`;
//     navigator.clipboard.writeText(shareableUrl).then(() => {
//         alert('Map link copied to clipboard!');
//     });
// });