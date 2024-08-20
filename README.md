

# Earthquake Map Visualization

## Overview

This project is an interactive web-based map that visualizes significant earthquake data from the past month using GeoJSON. The map is built using the Leaflet.js library, enhanced with clustering and custom visualizations. It allows users to explore earthquake data, including location, magnitude, and time of occurrence.

## Features

- **Interactive Map**: Pan, zoom, and click on markers to view detailed earthquake information.
- **Marker Clustering**: Markers are clustered to improve map readability, especially in areas with a high density of earthquakes.
- **Custom Popups**: Each marker provides detailed information about the earthquake, including location, magnitude, and time.
- **Legend**: A legend helps users interpret the magnitude of earthquakes based on marker size and color.

## Technologies Used

- **Leaflet.js**: A JavaScript library for interactive maps.
- **D3.js**: Used for fetching and handling GeoJSON data.
- **Leaflet.markercluster**: A plugin for clustering markers on the map.
- **HTML/CSS/JavaScript**: Core web technologies used for building and styling the project.

## Project Structure

```
earthquake-map/
├── index.html
├── static/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── logic.js
```

- **index.html**: The main HTML file that structures the web page and includes references to external libraries and internal scripts.
- **style.css**: Custom styles to ensure the map and legend are presented cleanly.
- **logic.js**: Contains the JavaScript logic for initializing the map, fetching data, and adding interactivity.

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, etc.)
- Basic knowledge of HTML, CSS, and JavaScript

### Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/maslla100/Earthquake-data-with-Leaflet
   cd earthquake-map
   ```

2. **Open `index.html`** in your web browser:
   ```bash
   open index.html
   ```

3. Explore the interactive map and click on markers to view detailed earthquake information.

## Customization

### Changing the Data Source

If you want to visualize a different set of earthquake data, modify the `geoData` variable in `logic.js` to point to a different GeoJSON URL from the [USGS Earthquake Hazards Program](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php).

### Styling the Map

To customize the look and feel of the map, modify the styles in `style.css` or adjust the Leaflet settings in `logic.js`.

## Contributing

If you find any issues or have suggestions for improvement, feel free to create a pull request or open an issue.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author
This project was created by Luis Llamas - Email Luis.Llamas@maslla.com
## Acknowledgments

- [Leaflet.js](https://leafletjs.com/)
- [D3.js](https://d3js.org/)
- [Leaflet.markercluster](https://github.com/Leaflet/Leaflet.markercluster)
- [USGS Earthquake Hazards Program](https://earthquake.usgs.gov/)

```

