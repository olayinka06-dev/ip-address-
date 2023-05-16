import React from 'react';
import L from 'leaflet'
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/leaflet.js';
const Map = () => {
    const [map, setMap] = useState(null);

    useEffect(() => {
        if (map && weatherData) {
            const leafletMap = L.map(map).setView([weatherData.coord.lat, weatherData.coord.lon], 13);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
                maxZoom: 18,
            }).addTo(leafletMap);
            L.marker([weatherData.coord.lat, weatherData.coord.lon]).addTo(leafletMap)
                .bindPopup(`<b>${weatherData.name}</b><br>${weatherData.weather[0].description}<br>Temperature: ${Math.round(weatherData.main.temp - 273.15)} °C`)
                .openPopup();
            return () => leafletMap.remove();
        }
    }, [map, weatherData]);
  return (
    <Wrapper>

    </Wrapper>
  )
}

export default Map;