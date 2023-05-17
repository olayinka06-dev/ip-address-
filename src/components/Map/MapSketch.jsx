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
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 18,
            }).addTo(leafletMap);
            L.marker([ipInfo.location.lat, ipInfo.location.lng]).addTo(leafletMap)
                .bindPopup(`<b>Country: ${ipInfo.location.country}</b><br>City: ${ipInfo.location.city}<br>Region: ${ipInfo.location.region}`)
                .openPopup();
            return () => leafletMap.remove();
        }
    }, [map, ipInfo]);
    // const getIPAddress = async () => {
    //     try {
    //       const response = await axios.get('https://api.ipify.org?format=json');
    //       const ipAddress = response.data.ip;
    //       console.log(ipAddress); // or do whatever you want with the IP address
    //     } catch (error) {
    //       console.error('Error:', error);
    //     }
    //   };
//       import React, { useEffect } from 'react';

// const YourComponent = () => {
//   useEffect(() => {
//     getIPAddress();
//   }, []);

//   // Rest of your component code...

//   return (
//     // JSX code for your component...
//   );
// };

// export default YourComponent;

      
  return (
    <Wrapper>
        <Map id="map" style={{ height: "400px" }} ref={(el) => setMap(el)}></Map>
    </Wrapper>
  )
}
const Wrapper = styled.div`
    
`;
const Map = styled.div`
    z-index: 10;

`;
export default MapSketch;