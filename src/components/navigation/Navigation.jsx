import React from 'react';
import bgimg from '../images/pattern-bg-desktop.png';
import styled from 'styled-components';
import '../../index.css';
const Navigation = () => {
  return (
    <Wrapper>
      <Img src={bgimg} alt={bgimg}/>
    </Wrapper>
  )
}
const Wrapper = styled.div`
`;
const Img = styled.img`
  width: 100%;
`;
export default Navigation