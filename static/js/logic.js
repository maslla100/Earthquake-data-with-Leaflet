// Initialize the map
let myMap = L.map('map').setView([20, 0], 2); // Center on the world map

// Add a base layer (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// URL to the earthquake data
let geoData = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson";

// Load the GeoJSON data with clustering
d3.json(geoData).then(function (data) {
    let markers = L.markerClusterGroup(); // Initialize a marker cluster group

    L.geoJson(data, {
        pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng, {
                radius: feature.properties.mag * 3, // Scale radius by magnitude
                fillColor: "#ff7800",
                color: "#000",
                weight: 1,
                opacity: 1,
                fillOpacity: 0.8
            });
        },
        onEachFeature: function (feature, layer) {
            layer.bindPopup(`<strong>Location:</strong> ${feature.properties.place}<br>
                             <strong>Magnitude:</strong> ${feature.properties.mag}<br>
                             <strong>Time:</strong> ${new Date(feature.properties.time)}`);
        }
    }).addTo(markers);

    markers.addTo(myMap);
});

// Create a legend
let legend = L.control({ position: 'bottomright' });

legend.onAdd = function () {
    let div = L.DomUtil.create('div', 'info legend');
    div.innerHTML += '<strong>Magnitude</strong><br>';
    div.innerHTML += '<i style="background: #ff7800"></i> ≥ 5.0<br>';
    div.innerHTML += '<i style="background: #ff0000"></i> ≥ 7.0<br>';
    div.innerHTML += '<i style="background: #b10026"></i> ≥ 9.0<br>';
    return div;
};

legend.addTo(myMap);
