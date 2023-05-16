import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {IoIosArrowForward} from 'react-icons/io';
import IpInformation from '../Ip Info/IpInformation';
import MapSketch from '../Map/MapSketch';



const SearchEngine = () => {
  const [ipAddress, setIpAddress] = useState("");
  const [ipInfo, setIpInfo] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!ipAddress) {
      setError("Please enter an Your Ip Address");
      return;
    }

    try {
      const IP_KEY = "at_iPdZbBjjZFpxMAg5R5gs3ZY4uKbkv";
      const IP_URL = `https://geo.ipify.org/api/v2/country,city,vpn?apiKey=${IP_KEY}&ipAddress=${ipAddress}`;
      const response = await axios.get(IP_URL);

      setIpInfo(response.data);
      setError("")
      
    } catch (error) {
      if (error.request) {
        setError("Ip Address not Found")
      }
      else if (error.response) {
        setError("Network Error, Please Check your Internet Connection")
      }
      else{
        setError("Something Went Wrong Unexpectedly")
      }
    }

  }
  const getIPAddress = async () => {
    try {
      const response = await axios.get('https://api.ipify.org?format=json');
      const myIpAddress = response.data.ip;
      console.log(myIpAddress); // or do whatever you want with the IP address
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
        <Position>
          <Field>
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
          <IpInformation
            ipInfo={ipInfo}
          />
        </Position>
      <div>
        <MapSketch
          ipInfo={ipInfo}
        />
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  
`;
const Position = styled.div`
`;
const Field = styled.div`
`;
const Form = styled.form`
  
`;
const Input = styled.input`
  
`;
const Button = styled.button`
  
`;
const Error = styled.div`
`

export default SearchEngine;