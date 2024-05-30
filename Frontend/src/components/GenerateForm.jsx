import React from 'react'
import styled from 'styled-components'
import TextInput from './TextInput';
import Button from './button';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CreateIcon from '@mui/icons-material/Create';

const Form = styled.div`
  flex: 1;
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 9%;
  justify-content: center;
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
`;

const Desc = styled.div`
  font-size: 17px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
`;

const Actions = styled.div`
  display: flex;
  flex: 1;
  gap: 8px;
`;

const GenerateForm = ({
  post,
  setPost,
  createPostLoading,
  setGenerateImageLoading,
  generateImageLoading,
  setCreatePostLoading,
}) => {
const generateImageFun = () =>{
  setGenerateImageLoading(true);
};
const createImageFun = () =>{
  setCreatePostLoading(true);
}
  return (
    <Form>
      <Top>
        <Title>Generate Image with prompt</Title>
        <Desc>Write your prompt </Desc>
      </Top>
      <Body>
        <TextInput
          label="Author"
          placeholder="Enter your name..."
          name="name"
          value={post.name}
          handelChange={(e)=>setPost({...post, prompt:e.target.value})}
        />
        <TextInput
          label="Image Prompt"
          placeholder="Write your detailed prompt..."
          name="prompt"
          rows="8"
          textArea
          value={post.prompt}
          handelChange={(e)=>setPost({...post, prompt:e.target.value})}
        />
        ** You can post the AI Generated Image to the community **
      </Body>
      <Actions>
        <Button text="Generate Image" 
        flex
        leftIcon={<AutoAwesomeIcon />}
        isLoading={generateImageLoading}
        isDisabled={post.prompt === ""} 
        onClick={()=>generateImageFun()}
         />
        <Button 
        text="Post Image" 
        type="secondary" 
        flex 
        leftIcon={<CreateIcon />} 
        isLoading={createPostLoading}
        isDisabled={post.name === "" || post.prompt === "" || post.photo === "" } 
        onClick={()=>createImageFun()}
        />
      </Actions>
    </Form>
  )
}

export default GenerateForm