import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {IoIosArrowForward} from 'react-icons/io';



const SearchEngine = () => {
  const [ipAddress, setIpAddress] = useState("");
  const [ipInfo, setIpInfo] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {

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
      else if (condition) {
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

export default SearchEngine;