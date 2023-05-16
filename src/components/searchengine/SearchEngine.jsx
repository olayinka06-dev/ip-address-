import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {IoIosArrowForward} from 'react-icons/io';



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
  return (
    <Wrapper>
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
      <div>
        {
          ipInfo && (
            <IpInfo>
              <Info>{ipInfo.ip}</Info>
              <Info>{ipInfo.location.country}</Info>
              <Info>{ipInfo.location.region}</Info>
              <Info>{ipInfo.location.city}</Info>
              <Info>{ipInfo.location.postalCode}</Info>
              <Info>{ipInfo.location.timezone}</Info>
              <Info>{ipInfo.location.isp}</Info>
              <Info>{ipInfo.ip}</Info>
            </IpInfo>
          )
        }
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  
`;
const Form = styled.form`
  
`;
const Input = styled.input`
  
`;
const Button = styled.button`
  
`;
const IpInfo = styled.div`
`;
const Info = styled.p`
`;
const Error = styled.div`
`

export default SearchEngine;