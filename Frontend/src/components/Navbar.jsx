import React from 'react'
import styled from 'styled-components'
import Button from './button' ;
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleLeft from '@mui/icons-material/ArrowCircleLeft';

function Navbar() {
    const Container = styled.div`
    height: 100%;
    overflow-y: scroll;
    `
  return (
    <div>
      <Container>PicAI
        <Button text="Create new Post" leftRounded={<ArrowCircleLeft/>}/>
      </Container>
    </div>
  )
}

export default Navbar 
