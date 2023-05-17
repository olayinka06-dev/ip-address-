import React, { useState, useEffect } from 'react';
import L from 'leaflet'
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/leaflet.js';
import styled from 'styled-components';
import '../../index.css';

const MapSketch = ({ipInfo}) => {
    const [map, setMap] = useState(null);

    useEffect(() => {
        if (map && ipInfo) {
            const leafletMap = L.map(map).setView([ipInfo.location.lat, ipInfo.location.lng], 13);
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 18,
            }).addTo(leafletMap);
            L.marker([ipInfo.location.lat, ipInfo.location.lng]).addTo(leafletMap)
                .bindPopup(`<b>Country: ${ipInfo.location.country}</b><br>City: ${ipInfo.location.city}<br>Region: ${ipInfo.location.region}`)
                .openPopup();
            return () => leafletMap.remove();
        }
    }, [map, ipInfo]);

      
  return (
    <Wrapper>
        <Map id="map"  ref={(el) => setMap(el)}></Map>
    </Wrapper>
  )
}
const Wrapper = styled.div`
    
`;
const Map = styled.div`
    z-index: 10;
    height: 60vh;
    width: 100%;
@media screen and (max-width: 950px) {
   height: 100vh;
  }
`;
export default MapSketch;