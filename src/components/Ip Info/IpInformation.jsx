import React from 'react';
import styled from 'styled-components';
import '../../index.css';


const IpInformation = ({ipInfo}) => {
  return (
    <Wrapper>
        {
          ipInfo && (
            <IpInfo>
              <Info>
                <h4>IP Address</h4>
                <h1>{ipInfo.ip}</h1>
              </Info>
              <Info>Country: {ipInfo.location.country}</Info>
              <Info>Region: {ipInfo.location.region}</Info>
              <Info>City: {ipInfo.location.city}</Info>
              <Info>PostalCode: {ipInfo.location.postalCode}</Info>
              <Info>
                <h4>Timezone</h4>
                <h1>UTC {ipInfo.location.timezone}</h1>
              </Info>
              <Info>
                <h4>ISP</h4>
                <h1>{ipInfo.location.isp}</h1>
              </Info>
            </IpInfo>
          )
        }
    </Wrapper>
  )
}
const Wrapper = styled.div`
/* position: relative; */
`;
const IpInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 13vh;
  background-color: white;
  padding: 0 10px;
  border-radius: 20px;
  z-index: 20;
`;
const Info = styled.div`
`;
export default IpInformation;