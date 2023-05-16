import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {IoIosArrowForward} from 'react-icons/io'


const SearchEngine = () => {
  const [ipAddress, setIpAddress] = useState("");
  const handleSubmit = async (e) => {

    try {
      const IP_KEY = "at_iPdZbBjjZFpxMAg5R5gs3ZY4uKbkv";
      const IP_URL = `https://geo.ipify.org/api/v2/country,city,vpn?apiKey=${IP_KEY}&ipAddress=${ipAddress}`
    } catch (error) {
      
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