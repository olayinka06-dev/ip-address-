import React, { useState } from 'react';
import styled from 'styled-components';
import '../../index.css';
import {MdLocationPin} from 'react-icons/md'
const IpInformation = ({ipInfo}) => {

  const [show, setShow] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const handleClick = () => {
    setShow(!show)
}
  const handleShowInfo = () => {
    setShowInfo(!showInfo)
  }

  return (
    <Wrapper>
        <div className='location'>
          <span onClick={handleShowInfo}><MdLocationPin className='span'/></span>
        </div>
        {
          ipInfo && (
            <IpInfo style={{height: `${showInfo ? "40vh" : "0vh"}`,}}>
              <Info>
                <h4>IP Address</h4>
                <h2>{ipInfo.ip}</h2>
              </Info>
              <Info>
                <h4>Location</h4>
                <Showmore>
                  <h2>{ipInfo.location.country}</h2>
                  <button onClick={handleClick}>
                  show more
                  <div style={{height: `${show ? "10vh" : "0vh"}`}}>
                    <h3>Region: {ipInfo.location.region}</h3>
                    <h3>City: {ipInfo.location.city}</h3>
                    <h3>PostalCode: {ipInfo.location.postalCode}</h3>
                  </div>
                  </button>
                </Showmore>
                </Info>
              {/*  */}
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
  .location{
    display: none;
  }
  @media screen and (max-width: 950px) {
    .location{
      display: block;
    }
    .span{
      color: white;
      font-size: 30px;
      animation: animate 2s linear infinite;

    }
    @keyframes animate {
    0%{transform: translateY(10px);}
    50%{transform: translateY(0px);}
    100%{transform: translateY(10px);}
    }
}
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
    overflow: hidden;
  }
`;
const Showmore = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  button{
    position: relative;
    border: none;
    background-color: white;
    color: black;
  }
  div{
    position: absolute;
    bottom: 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
`
const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-right: 1px solid lightgray;
  &:nth-of-type(4){
    border: none;
  }
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