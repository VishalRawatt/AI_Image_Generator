import React from 'react'
import styled from 'styled-components'
import GenerateForm from '../components/GenerateForm';
import GeneratedImage from '../components/GeneratedImage';

function CreatePost() {
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
`;

  const Wrapper = styled.div`
  max-width: 1200px;
  gap: 8%;
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  @media (max-width:768px ){
    flex-direction: column;
  }
`;

  return (
    <Container>
      <Wrapper>
        <GenerateForm />
        <GeneratedImage loading={true} />
      </Wrapper>
    </Container>
  )
}

export default CreatePost
