import React from 'react';
import styled from 'styled-components'
import Navigation from '../navigation/Navigation';
import SearchEngine from '../searchengine/SearchEngine';

const Home = () => {
  return (
    <Wrapper>
        <Navigation/>
        <SearchEngine/>
    </Wrapper>
  )
}
const Wrapper = styled.div`


`
export default Home;