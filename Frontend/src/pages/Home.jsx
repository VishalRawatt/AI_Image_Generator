import React from 'react'
import styled from 'styled-components'
import SearchBar from '../components/Searchbar';
import ImgCard from '../components/ImgCard';

const Container = styled.div`
  padding: 30px 30px;
  padding-bottom: 200px;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  @media (max-width: 768px) {
    padding: 6px 10px;
  }
  background: ${({ theme }) => theme.background};
`;

const Headline = styled.div`
  font-size: 34px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Span = styled.div`
  font-size: 30px;
  font-weight: 800;
  color: ${({ theme }) => theme.secondary};
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  padding: 32px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardWrapper = styled.div`
  display: grid;
  gap: 20px;

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 640px) and (max-width: 1199px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 639px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Home = () => {
  const item = {
    photo: "https://th.bing.com/th/id/OIP.1d6tBbNiJTFQNEK_k0sSjQHaFj?rs=1&pid=ImgDetMain",
    author: "Vishal",
    prompt: "Its a prompt",
  }
  return (
    <Container>
      <Headline>Explore popular posts in the community!
        <Span>⦾ Generated with AI ⦾</Span>
      </Headline>
      <SearchBar />
      <Wrapper>
        <CardWrapper>
          <ImgCard item={item} />
          <ImgCard item={item} />
          <ImgCard item={item} />
          <ImgCard item={item} />
          <ImgCard item={item} />
          <ImgCard item={item} />
          <ImgCard item={item} />
          <ImgCard item={item} />
          <ImgCard item={item} />
          <ImgCard item={item} />
        </CardWrapper>
      </Wrapper>
    </Container>
  )
}

export default Home
