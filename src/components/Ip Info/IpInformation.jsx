import React from 'react';
import styled from 'styled-components';
import '../../index.css';


const IpInformation = ({ipInfo}) => {
  return (
    <Wrapper>
        {
          ipInfo && (
            <IpInfo>
              <Info>IP: {ipInfo.ip}</Info>
              <Info>Country: {ipInfo.location.country}</Info>
              <Info>Region: {ipInfo.location.region}</Info>
              <Info>City: {ipInfo.location.city}</Info>
              <Info>PostalCode: {ipInfo.location.postalCode}</Info>
              <Info>TimeZone: {ipInfo.location.timezone}</Info>
              <Info>Isp: {ipInfo.location.isp}</Info>
            </IpInfo>
          )
        }
    </Wrapper>
  )
}
const Wrapper = styled.div`
position: relative;
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
  /* position: absolute; */
`;
const Info = styled.p`
`;
export default IpInformation;