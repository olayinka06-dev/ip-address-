import React from 'react';
import styled from 'styled-components'
import SearchEngine from '../searchengine/SearchEngine';
import '../../index.css'

const Home = () => {
  return (
    <Wrapper>
        <SearchEngine/>
    </Wrapper>
  )
}
const Wrapper = styled.div`


`
export default Home;