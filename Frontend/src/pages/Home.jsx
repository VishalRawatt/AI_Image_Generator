import React from 'react'
import styled from 'styled-components'
import SearchBar from '../components/SearchBar';
import ImgCard from '../components/ImgCard';

const Container = styled.div`
height:100%;
overflow:scroll;
padding:30px 30px ;
display:flex;
background : ${({ theme }) => theme.bg}
padding-bottom:50px;
flex-direction:column;
align-items:center; 
gap:20px ;
@media (max-width:768){
  padding: 6px 10px ;
}
`

const Headline = styled.div`
font-size:34px;
font-weight:500;
color: ${({ theme }) => theme.text_primary}
display: flex;
align-items: center;
flex-direction: column;
@media (max-width:600px){
  font-size:22px;
}
` ;

const Span = styled.div`
   font-size:30px;
   font-weight:800;
   color: ${({ theme }) => theme.secondary}
   
   @media (max-width: 600px){
    font-size: 20px;
   }`

const Wrapper = styled.div`
    width: 100%;
    max-width: 1400px ;
    padding: 32px 0px ;
    display: flex;
    justify-content: center;
`;

const CardWrapper = styled.div`
    display: flex;
    gap:20px;
    @media(max-width: 1200px){
      grid-template-columns: repeat(4,1fr);
    }
    @media (min-width: 640px) and (max-width: 1199px){
      grid-template-columns: repeat(3,1fr);
    }
    @media (min-width: 640px){
      grid-template-columns: repeat(2,1fr);
    }
`;

const Home = () => {
  return (
    <Container>
      <Headline>Explore popular posts in the community!
        <Span>⦾ Generated with AI ⦾</Span>
      </Headline>
      <SearchBar />
      <Wrapper>
        <CardWrapper>
          <ImgCard/>
        </CardWrapper>
      </Wrapper>
    </Container>
  )
}

export default Home
