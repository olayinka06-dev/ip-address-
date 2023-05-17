import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {IoIosArrowForward} from 'react-icons/io';
import IpInformation from '../Ip Info/IpInformation';
import MapSketch from '../Map/MapSketch';
import '../../index.css';
import bgimg from '../images/pattern-bg-desktop.png';




const SearchEngine = () => {
  const [ipAddress, setIpAddress] = useState("");
  const [ipInfo, setIpInfo] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!ipAddress) {
      setError("Please enter Your Ip Address");
      return;
    }

    try {
      const IP_KEY = "at_iPdZbBjjZFpxMAg5R5gs3ZY4uKbkv";
      const IP_URL = `https://geo.ipify.org/api/v2/country,city,vpn?apiKey=${IP_KEY}&ipAddress=${ipAddress}`;
      const response = await axios.get(IP_URL);

      setIpInfo(response.data);
      setError("")
      
    } catch (error) {
      if (error.response) {
        setError("Ip Address not Found")
      }
      else if (error.request) {
        setError("Network Error, Please Check your Internet Connection")
      }
      else{
        setError("Something Went Wrong Unexpectedly")
      }
    }

  }
  const getIPAddress = async () => {
    try {
      const IP_KEY = "at_iPdZbBjjZFpxMAg5R5gs3ZY4uKbkv";
      const IP_URL = `https://geo.ipify.org/api/v2/country,city,vpn?apiKey=${IP_KEY}&ipAddress=${ipAddress}`;
      const response = await axios.get(IP_URL);
      const responseTwo = await axios.get('https://api.ipify.org?format=json');
      const myIpAddress = responseTwo.data.ip;

      setIpInfo(response.data);
      // setError("")
      // console.log(myIpAddress); // or do whatever you want with the IP address
      setIpAddress(myIpAddress)
    } catch (error) {
      console.error('Error:', error);
    }
  };
    window.addEventListener("load", ()=> {
      getIPAddress();
    })
  return (
    <Wrapper>
      <Field>
        <h1>IP Address Tracker</h1>
        <Form onSubmit={handleSubmit}>
          <Input
            type='text'
            placeholder='Search for any IP address or domain'
            value={ipAddress}
            onChange={e => setIpAddress(e.target.value)}
          />
          <Button><IoIosArrowForward/></Button>
        </Form>
        {
          error && (
            <Error>{error}</Error>
          )
        }
      </Field>
      <Base>
        <IpInformation
          ipInfo={ipInfo}
        />
      </Base>
      <div>
        <MapSketch
          ipInfo={ipInfo}
        />
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  background-image: url(${bgimg});
  width: 100%;
  height: 40vh;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;
const Field = styled.div`
  width: 100%;
  max-width: 670px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Base = styled.div`
  /* position: absolute;
  top: 32% !important;
  z-index: 1000; */
`;
const Input = styled.input`
  width: 85%;
  padding: 17px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border-right: none;
  border: none;
  outline: none;
  
`;
const Button = styled.button`
  width: 15%;
  padding: 17px;
  border-left: none;
  border: none;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: black;
  color: white;
`;
const Error = styled.div`
  color: red;
`;

export default SearchEngine;