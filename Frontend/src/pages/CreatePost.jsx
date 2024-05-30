import React, { useState } from 'react'
import styled from 'styled-components'
import GenerateForm from '../components/GenerateForm';
import GeneratedImage from '../components/GeneratedImage';

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
const CreatePost= () => {
  const [generateImageLoading, setGenerateImageLoading] = useState(false) ;
  const [createPostLoading, setCreatePostLoading] = useState(false) ;
  const [post, setPost] = useState({
    name: "",
    prompt: "",
    photo: "",
  })
  return (
    <Container>
      <Wrapper>
        <GenerateForm 
        post={post} 
        setPost={setPost} 
        setGenerateImageLoading={setGenerateImageLoading} 
        createPostLoading={createPostLoading} 
        generateImageLoading={generateImageLoading} 
        setCreatePostLoading={setCreatePostLoading}
        />
        <GeneratedImage src={post?.photo} loading={generateImageLoading} />
      </Wrapper>
    </Container>
  )
}

export default CreatePost
