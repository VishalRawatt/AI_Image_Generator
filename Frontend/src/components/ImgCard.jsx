import React from 'react'
import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';


const Card = styled.div`` ; 
const ImgCard = () => {
  return (
    <Card>
        <LazyLoadImage src = "https://imgs.search.brave.com/BrFuuUENt1_DOqlE9gpVvobbQe7drdmoureILpXGTlI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9iZWlu/Y3J5cHRvLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMi8x/MS9BSS1pbWFnZS1n/ZW5lcmF0b3Itd2hh/dGlzLTg1MHg0Nzgu/anBnLndlYnA"/>
    </Card>
  )
}

export default ImgCard