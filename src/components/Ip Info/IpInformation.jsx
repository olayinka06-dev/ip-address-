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
                <h2>{ipInfo.ip}</h2>
              </Info>
              <Info>
                <h4>Location</h4>
                <h2>{ipInfo.location.country}</h2>
                </Info>
              {/* <Info>Region: {ipInfo.location.region}</Info>
              <Info>City: {ipInfo.location.city}</Info>
              <Info>PostalCode: {ipInfo.location.postalCode}</Info> */}
              <Info>
                <h4>Timezone</h4>
                <h2>UTC {ipInfo.location.timezone}</h2>
              </Info>
              <Info>
                <h4>ISP</h4>
                <h2>{ipInfo.location.isp}</h2>
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
  min-height: 13vh;
  background-color: white;
  padding: 20px;
  border-radius: 20px;
  z-index: 20;
  gap: 30px;

  @media screen and (max-width: 950px) {
    flex-direction: column;
    gap: 12px;
  }
`;
const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-right: 1px solid lightgray;
  h4{
    color: #b3aeae;
  }
  @media screen and (max-width: 950px) {
    gap: 8px;
    align-items: center;
    border: none;

  }
`;
export default IpInformation;