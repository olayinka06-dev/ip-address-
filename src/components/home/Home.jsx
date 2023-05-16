import React from 'react';
import styled from 'styled-components'
import Navigation from '../navigation/Navigation';
import SearchEngine from '../searchengine/SearchEngine';
import Meaning from '../meaning/Meaning';

const Home = () => {
  return (
    <Wrapper>
        <Navigation/>
        <SearchEngine/>
        <Meaning/>
    </Wrapper>
  )
}
const Wrapper = styled.div`


`
export default Home;